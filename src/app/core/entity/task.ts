export class Task {

    constructor(
        public name: string,
        public handler: string,
        public partner: string,
        public estimate: number,
        public notes: string,
    ) { }

    
}