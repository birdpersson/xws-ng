export class ChangeInfo{
    name: string;
    username: string;
    email: string;
    website: string;
    phone: string;
    date: Date;
    gender: string;
    bio: string;
    constructor(name: string, username: string, email: string, website: string, phone: string, date: Date, gender: string, bio: string){
        this.name = name;
        this.username = username;
        this.bio = bio;
        this.date = date;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.website = website;
    }
}