export class Story {
    public name: string;
    public ID: number;
    public estimate: number;
    public importance: number;
    public status: string;
    public tag: string[];
    constructor(name: string, ID: number, esimate: number, importance: number, status: string, tag: string[])
    { 
        this.name = name;
        this.ID = ID;
        this.estimate = esimate;
        this.importance = importance;
        this.status = status;
        this.tag = tag;
    }
}