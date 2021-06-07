export class Post{
    caption: string;
    location: string;
    postType: string;
    highlighted: boolean;
    mediaUrls: Array<string>
    hashtags: Array<string>;
    sharedWith: Array<string>;

    constructor(caption: string, location: string, postType: string, highlighted: boolean, tags: Array<string>, mediaUrls: Array<string>, sharedWith: Array<string>){
        this.caption = caption;
        this.location = location;
        this.postType = postType;
        this.highlighted = highlighted;
        this.hashtags = tags;
        this.mediaUrls = mediaUrls;
        this.sharedWith = sharedWith;
    }
}