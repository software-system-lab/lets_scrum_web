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
}
