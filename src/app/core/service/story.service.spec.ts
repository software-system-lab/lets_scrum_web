import { TestBed } from '@angular/core/testing';
import { Stories } from './mock-story' 
import { StoryService } from './story.service';

describe('StoryService', () => {
  let service: StoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the data', () => {
    expect(service.getStory()).toEqual(Stories);
  })

});
