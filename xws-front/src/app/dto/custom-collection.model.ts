export class CollectionDTO{
    name:string;
    posts: string[];

    constructor(name:string, posts: string[]){
        this.name = name;
        this.posts = posts;
    }
}