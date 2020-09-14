import { Story } from './story';
import { NumberValueAccessor } from '@angular/forms';

export class Sprint {
    public ID: number;
    public sprintGoal: string;
    public stories: Story[];
    public startDate: string; //type may change
    public endDate: string;
    public duration: number;
    public teamMember: string[]; //type may change
    
    constructor(ID: number, sprintGoal: string, stories: Story[], startDate: string, endDate: string, duration: number, teamMember: string[])
    {
        this.ID = ID;
        this.sprintGoal = sprintGoal;
        this.stories = stories;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = duration;
        this.teamMember = teamMember;
    }
}