export class Task {
    public name: string;
    public ID: number;
    public handler: string;
    public partner: string;
    public estimate: number;
    public notes: string;
    constructor( name: string, ID: number, handler: string, partner: string, estimate: number, notes: string )
    {
        this.name = name;
        this.ID = ID;
        this.handler = handler;
        this.partner = partner;
        this.estimate = estimate;
        this.notes = notes;
    }
}