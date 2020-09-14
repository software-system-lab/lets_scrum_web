import { Injectable } from '@angular/core';
import { Sprint } from "../entity/sprint";
import { Story } from '../entity/story';
import { Task } from '../entity/task';
import { Sprints } from './mock-sprint';
import { Stories } from './mock-story';

@Injectable({
  providedIn: 'root'
})
export class SprintBacklogService {

  private sprintList: Sprint[];
  private storyList: Story[];

  constructor() { 
  }

  getSprintList(): Sprint[] {
    return this.sprintList;
  }

  getStoryList(): Story[] {
    return this.storyList;
  }

  getMockData() : void {
    this.sprintList = Sprints;
    this.storyList = Stories;
  }

  addStory() : void {
    this.storyList.push(new Story('',0,0,0,'',[],[]));
  }

  deleteStory(index : number) : void {
    this.storyList.splice(index, 1);
  }

  editStoryName(index : number, name : string) : void {
    this.storyList[index].setName(name);
  }

  editStoryImportance(index : number, importance : number) : void {
    this.storyList[index].setImportance(importance);
  }

  editStoryEstimate(index : number, estimate : number) : void {
    this.storyList[index].setEstimate(estimate);
  }

  // editStoryTags(index : number, tags : string[]) : void {
  //   this.storyList[index].setTags (tags);
  // }

}
