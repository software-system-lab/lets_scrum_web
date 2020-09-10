import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintBacklogComponent } from './sprint-backlog.component';
import { Stories, newStory, emptyStory } from '../../../core/service/mock-story';
import { newTask } from '../../../core/service/mock-task'; 

describe('SprintBacklogComponent', () => {
  let component: SprintBacklogComponent;
  let fixture: ComponentFixture<SprintBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get stories from service', () => {
    expect(component.getStoryList()).toEqual(Stories);
  });

  it('should create a new empty story and show on the list', () => {
    component.createEmptyStory();
    

  });

});
