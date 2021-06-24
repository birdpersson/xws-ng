export class ReportDTO{
    username: string;
    repUsername: string;
    reason: string;

    constructor(username:string, repUsername: string,reason: string){
        this.username = username;
        this.repUsername = repUsername;
        this.reason = reason;
    }
}