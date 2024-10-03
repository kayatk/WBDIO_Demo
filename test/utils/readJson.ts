import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export interface Site {
    projectName: string;
    url: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function readJsonFile(filePath: string): any {
    const fullPath = path.resolve(__dirname, filePath);
    const data = readFileSync(fullPath, 'utf-8');
    return JSON.parse(data);
}

    // Function to access each site based on the project name
export function getSitesByProjectName(projectName: string) {
        const projects = readJsonFile('../../test/utils/outputs/sites.json');
        const project = projects.find((proj: any) => proj.projectName === projectName);

    if (project && project.sites.length > 0) {
        console.log(`Accessing sites for project: ${projectName}`);
        return project.sites;
        
    } else {
      return console.log(`No sites available for project: ${projectName}`);
    }
}

export function getSites(): Site[] {
    const projects = readJsonFile('../../test/utils/outputs/sites.json');  
    const siteList: Site[] = [];

    projects.forEach((project: any) => {
        const projectName = project.projectName;
        const siteUrls: Site[] = project.sites.map((site: string) => ({
            projectName,
            url: site
        }));


        if (siteUrls.length > 0) {
            siteList.push(...siteUrls);
        }
    });

    return siteList; 
}





