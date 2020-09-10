import { TestBed } from '@angular/core/testing';
import { Stories, emptyStory } from './mock-story';

import { SprintBacklogService } from './sprint-backlog.service';

describe('SprintBacklogService', () => {
  let service: SprintBacklogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintBacklogService);
    service.getMockData();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get stories from service', () => {
    service.getMockData();
    expect(service.getStoryList()).toEqual(Stories);
  });

  it('should create a new story',()=>{
    service.addStory();
    expect(service.getStoryList()).toContain(emptyStory);
  });

  it('should delete a story',()=>{
    let storyLength = service.getStoryList().length;
    service.deleteStory(storyLength-1);
    expect(service.getStoryList().length).toEqual(storyLength-1);
  });

  
});
