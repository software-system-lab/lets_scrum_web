import { TestBed } from '@angular/core/testing';
import { Stories, newStory, editedStory } from './mock-story' 
import { StoryService } from './story.service';
import { Story } from '../entity/story';

describe('StoryService', () => {
  let service: StoryService;
  let StoryCreated: Story;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the data', () => {
    expect(service.getStory()).toEqual(Stories);
  });

  it('should create a story', () => {
    StoryCreated = service.createStory('ez scrum5', 5, 0, 99, 'new', ['abc', 'def']);
    expect(StoryCreated).toEqual(newStory);
  });

  it('should be edited with right value', () => {
    StoryCreated = service.createStory('ez scrum5', 5, 0, 99, 'new', ['abc', 'def']);
    service.editStory(StoryCreated, 'edited', 5, StoryCreated.estimate, StoryCreated.importance, StoryCreated.status, StoryCreated.tag);
    expect(StoryCreated).toEqual(editedStory);
  });

});
