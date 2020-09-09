export class Story {
    private name: string;
    private ID: number;
    private estimate: number;
    private importance: number;
    private status: string;
    private tag: string[];
    constructor(name: string, ID: number, esimate: number, importance: number, status: string, tag: string[])
    { 
        this.name = name;
        this.ID = ID;
        this.estimate = esimate;
        this.importance = importance;
        this.status = status;
        this.tag = tag;
    }

    getName(): string {
        return this.name;
    }

    getID(): number {
        return this.ID;
    }

    getEstimate(): number {
        return this.estimate;
    }

    getImportance(): number {
        return this.importance;
    }

    getStatus(): string {
        return this.status;
    }

    getTag(): string[] {
        return this.tag;
    }

    setName(name:string) {
        this.name = name;
    }

    setEstimate(estimate:number) {
        this.estimate = estimate;
    }

    setImportance(importance:number) {
        this.importance = importance;
    } 

}