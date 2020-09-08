import { Injectable } from '@angular/core';
import { Story } from '../entity/story';
import { Sprint } from '../entity/sprint';
import { Sprints } from './mock-sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor() { }

  getSprint() :Sprint[] {
    return Sprints;
  }

  createSprint(sprintGoal: string,stories: Story[],startDate: string,endDate: string,duration: number,teamMember: string[]) : Sprint {
    let newSprint = new Sprint( sprintGoal, stories, startDate, endDate, duration, teamMember);
    return newSprint;
  }
}
