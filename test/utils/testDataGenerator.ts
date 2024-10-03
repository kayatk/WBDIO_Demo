export class TestDataGenerator {
    // disclaimer: this will be a real generator soon!
    
    public getUserName(): string {
        return 'michal';
    }
    
    public getPassword(): string {
        return 'qwerty';
    }
    
    public getEmail(): string {
        return `mnir+${Date.now}@harlemnext.com`;
    }
    
    public generateUserName(random: boolean = false): string {
        return 'michal';
    }
    
    public generatePassword(random: boolean = false): string {
        return 'qwerty';
    }
    
    public generateEmail(random: boolean = false): string {
        return `mnir+${Date.now}@harlemnext.com`;
    }

    public generateLocation(): string {
        return 'Chi';
    }

    public generateAge(index: number): string {
        const num = ['10', '1998']
        return num[index];
    }
}
