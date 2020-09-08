import { Injectable } from '@angular/core';
import { Story } from '../entity/story';
import { Stories } from './mock-story'

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }

  getStory() :Story[] {
    return Stories;
  }

  createStory(name: string, ID: number, estimate: number, importance: number, status: string, tag: string[]) : Story {
    let newStory = new Story( name, ID, estimate, importance, status, tag);
    return newStory;
  }

  editStory(currentStory: Story,name: string, ID: number, estimate: number, importance: number, status: string, tag: string[]) : Story {
    currentStory.name = name;
    currentStory.ID = ID;
    currentStory.estimate = estimate;
    currentStory.importance = importance;
    currentStory.status = status;
    currentStory.tag = tag;
    return currentStory;
  }
  
  // editStory()
}
