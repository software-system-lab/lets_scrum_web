export class Task {

    constructor(
        public name: string,
        public handler: string,
        public partner: string,
        public estimate: number,
        public notes: string,
    ) { }

    getName() {
        return this.name;
    }
    getHandler() {
        return this.handler;
    }
    getPartner() {
        return this.partner;
    }
    getEstimate() {
        return this.estimate;
    }
    getNotes() {
        return this.notes;
    }
    setName(name:string) {
        this.name = name;
    }
    setHandler(handler:string) {
        this.handler = handler;
    }
    setPartner(partner:string) {
        this.partner = partner;
    }
    setEstimate(estimate:number) {
        this.estimate = estimate;
    }
    setNotes(notes:string) {
        this.notes = notes;
    }
}