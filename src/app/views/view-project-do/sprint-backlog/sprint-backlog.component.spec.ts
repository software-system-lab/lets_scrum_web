import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintBacklogComponent } from './sprint-backlog.component';
import { Stories, newStory } from '../../../core/service/mock-story';
import { newTask } from '../../../core/service/mock-task'; 
import { StoryService } from 'src/app/core/service/story.service';

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
    expect(component.Stories).toEqual(Stories);
  });

  it('should create new story', () => {
    component.createStory();
    expect(component.Stories).toContain(newStory);
  });

  it('should create new task', () => {
    component.createTask();
    expect(component.Tasks).toContain(newTask);
  });

  it('tasks should be edited with right value', () => {
  });
});
