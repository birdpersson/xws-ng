export class GetPostDTO  {
    id: number;
    username:string;
    location:string;
    description:string;
    hashtags: string[];
    mediaUrls: string[];
    date: Date;
    postType: string;
}