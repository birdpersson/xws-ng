export class ChangeInfo{
    name: string;
    username: string;
    email: string;
    website: string;
    phone: string;
    date: Date;
    gender: string;
    bio: string;
	private:boolean;
	allowMessages:boolean;
	allowTags:boolean;

    constructor(name: string, username: string, email: string, website: string, phone: string, date: Date, gender: string, bio: string,privacy:boolean,allowMessages:boolean,allowTags:boolean){
        this.name = name;
        this.username = username;
        this.bio = bio;
        this.date = date;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.website = website;
        this.private=privacy;
        this.allowMessages=allowMessages;
        this.allowTags=allowTags;
    }
}