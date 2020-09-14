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

  it('should create a new story',() => {
    service.addStory();
    expect(service.getStoryList()).toContain(emptyStory);
  });

  it('should delete a story',() => {
    let storyLength = service.getStoryList().length;
    service.deleteStory(storyLength-1);
    expect(service.getStoryList().length).toEqual(storyLength-1);
  });

  it('should change the story name',() => {
    service.editStoryName(0,'changed name');
    expect(service.getStoryList()[0].getName()).toEqual('changed name');
  });

  it('should change the story estimate',() => {
    service.editStoryEstimate(0,12);
    expect(service.getStoryList()[0].getEstimate()).toEqual(12);
  });

  it('should change the story importance',() => {
    service.editStoryImportance(0,98);
    expect(service.getStoryList()[0].getImportance()).toEqual(98);
  });

});
