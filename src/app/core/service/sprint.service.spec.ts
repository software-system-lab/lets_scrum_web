import { TestBed } from '@angular/core/testing';

import { SprintService } from './sprint.service';
import { Story } from '../entity/story';
import { Sprint } from '../entity/sprint';
import { Stories } from './mock-story';
import { Sprints, newSprint } from './mock-sprint';


describe('SprintService', () => {
  let service: SprintService;
  let SprintCreated: Sprint;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the data', () => {
    expect(service.getSprint()).toEqual(Sprints);
  });

  it('should create a sprint', () => {
    SprintCreated = service.createSprint('sprint2', Stories, '2020/08/23', '2020/09/07', 14, ['user1','user2']);
    expect(SprintCreated).toEqual(newSprint);
  });

});
