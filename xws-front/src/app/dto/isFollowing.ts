export class IsFollowing{
    username:string;
    follow:Boolean;

    constructor(username:string, follow:Boolean){
        this.username = username;
        this.follow = follow;  
    }
}