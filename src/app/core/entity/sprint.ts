import { Story } from './story';

export class Sprint {
    public sprintGoal: string;
    public stories: Story[];
    public startDate: string; //type may change
    public endDate: string;
    public duration: number;
    public teamMember: string[]; //type may change
    constructor(sprintGoal: string,stories: Story[],startDate: string,endDate: string,duration: number,teamMember: string[])
    {
        this.sprintGoal = sprintGoal;
        this.stories = stories;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = duration;
        this.teamMember = teamMember;
    }
}