import { TestBed } from '@angular/core/testing';
import { Stories } from './mock-story';

import { SprintBacklogService } from './sprint-backlog.service';

describe('SprintBacklogService', () => {
  let service: SprintBacklogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintBacklogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get stories from service', () => {
    service.getMockData();
    expect(service.getStoryList()).toEqual(Stories);
  });
});
