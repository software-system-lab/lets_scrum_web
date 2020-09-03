export class Story {

    constructor(
        public name: string,
        public ID: number,
        public estimate: number,
        public importance: number,
        public handler: string,
        public status: string,
        public tag: string[]
    ) { }
}