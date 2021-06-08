export class PostAll{
    id : number;
    username : string;
    created : Date;
    mediaUrls: Array<string>;
    caption: string;
    location: string;
    hashtags: Array<string>;
    likes: Array<string>;
    dislikes: Array<string>;
    comments: Array<string>;
    sharedWith: Array<string>;
    highlighted: boolean;
    postType: string;

    constructor(id : number, username : string, created : Date, mediaUrls: Array<string>, caption: string, location: string, hashtags: Array<string>, likes: Array<string>, 
        dislikes: Array<string>, comments: Array<string>, sharedWith: Array<string>, highlighted: boolean, postType: string){
        this.id = id;
        this.username = username;
        this.created = created;
        this.mediaUrls = mediaUrls;
        this.caption = caption;
        this.location = location;
        this.hashtags = hashtags;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        this.sharedWith = sharedWith;
        this.highlighted = highlighted;
        this.postType = postType;
        
    }
}