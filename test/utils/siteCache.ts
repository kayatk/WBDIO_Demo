import * as fs from 'fs';
import * as path from 'path';

interface SiteList {
    [projectName: string]: string[];
}

class SiteCache {
    private static instance: SiteCache;
    private siteList: SiteList | null = null;

    private constructor() {}

    public static getInstance(): SiteCache {
        if (!SiteCache.instance) {
            SiteCache.instance = new SiteCache();
        }
        return SiteCache.instance;
    }

    public loadSiteList(): void {
        if (this.siteList === null) {
            const filePath = path.join(__dirname, 'outputs/sites.json');
            const fileContents = fs.readFileSync(filePath, 'utf-8');
            this.siteList = JSON.parse(fileContents) as SiteList;
        }
    }

    public getSiteList(): SiteList {
        if (this.siteList === null) {
            this.loadSiteList();
        }
        return this.siteList!;
    }

    public getSitesByProjectName(projectName: string): string[] | undefined {
        const siteList = this.getSiteList();
        return siteList[projectName];
    }
}

export const siteCache = SiteCache.getInstance();