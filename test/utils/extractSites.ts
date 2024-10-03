import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

const GITLAB_TOKEN = process.argv[2];
const groupId = parseInt(process.argv[3], 10);

if (!GITLAB_TOKEN || isNaN(groupId)) {
    console.error('Error: Please provide GitLab token as 1st argument and groupID as 2nd argument.');
    process.exit(1);
}

const GITLAB_API_URL = 'https://gitlab.harlemnext.dev/api/v4';

const headers = {
    'Private-Token': GITLAB_TOKEN,
};

interface Project {
    id: number;
    name: string;
}

interface File {
    type: 'blob' | 'tree'; // 'tree' = directory, 'blob' = file
    name: string;
}

interface SiteList {
    projectName: string;
    sites: string[];
}

async function listProjectsInGroup(groupId: number): Promise<Project[]> {
    try {
        const url = `${GITLAB_API_URL}/groups/${groupId}/projects`;
        const response = await axios.get(url, { headers });
        return response.data as Project[];
        
    } catch (error) {
        console.error('Failed to list projects:', extractErrorMessage(error));
        throw error;
    }
}

async function listFilesInFolder(projectId: number, folderPath: string): Promise<File[]> {
    try {
        const url = `${GITLAB_API_URL}/projects/${projectId}/repository/tree`;
        const response = await axios.get(url, {
            headers,
            params: { path: folderPath, recursive: false },
        });
        return response.data as File[];

    } catch (error) {
        console.error(`Failed to list files in ${folderPath}:`, extractErrorMessage(error));
        throw error;
    }
}

async function extractSitesFromProject(projectId: number): Promise<string[]> {
    const platformsPath = 'platforms';
    const platforms = await listFilesInFolder(projectId, platformsPath);

    const platformPromises = platforms
        .filter(platform => platform.type === 'tree')
        .map(async platform => {
            const platformPath = `${platformsPath}/${platform.name}`;
            const sites = await listFilesInFolder(projectId, platformPath);

            const sitePromises = sites
                .filter(site => site.type === 'tree')
                .map(async site => {
                    const customFilePath = `${platformPath}/${site.name}/_custom.xml`;

                    try {
                        await axios.get(`${GITLAB_API_URL}/projects/${projectId}/repository/files/${encodeURIComponent(customFilePath)}/raw`, { headers });
                    } catch (error) {
                        // Ignoring the error, as we still want to add the folder name
                    }

                    if (!['gcp.json', 'config', '_default'].includes(site.name)) {
                        return site.name;
                    }

                    return undefined;
                });

            const siteNames = await Promise.all(sitePromises);
            return siteNames.filter((name): name is string => name !== undefined);
        });

    const allSites = await Promise.all(platformPromises);
    return allSites.flat();
}

function extractErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        const axiosError = error as { response?: { data?: any } };
        if (axiosError.response) {
            return axiosError.response.data?.message || error.message;
        }
        return error.message;
    }
    return 'Unknown error';
}

// Start here: npx ts-node src/extractSites.ts <token> <whitelabels groupid = 1133>
(async () => {
    const begin = Date.now();
    console.log(`start time: ${begin}`);
    try {
        const projects = await listProjectsInGroup(groupId);
        const allSites: SiteList[] = [];

        for (const project of projects) {
            const sites = await extractSitesFromProject(project.id);
            allSites.push({ projectName: project.name, sites });
        }

        const outputFilePath = path.join(__dirname, 'outputs/sites.json');
        fs.writeFileSync(outputFilePath, JSON.stringify(allSites, null, 2));

        console.log(`They're here! @ ${outputFilePath}`);
    } catch (error) {
        console.error('Error:', extractErrorMessage(error));
    }
    
    const end = Date.now();
    console.log(`end time: ${end}`);
    const total = Math.floor( (end - begin)/ 1000);
    console.log(`This took  ${total} seconds.`);
})();