import { NotificationSettings } from './notification-settings.model';
export class User {
    username:string;
    password:string;
    name:string;
    phoneNumber:string;
    email:string;
    birthday:Date;
    website:string;
    bio:string;
    private: Boolean;
    muted:User[]=[];
    blocked:User[]=[];
    notifications:NotificationSettings[]=[];
}