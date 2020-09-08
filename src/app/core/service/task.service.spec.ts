import { TestBed } from '@angular/core/testing';
import { tasks, newTask, editedTask } from './mock-task';
import { TaskService } from './task.service';
import { Task } from '../entity/task';

describe('TaskService', () => {
  let service: TaskService;
  let TaskCreated: Task;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the data', () => {
    expect(service.getTask()).toEqual(tasks);
  })

  it('should create new task', () => {
    TaskCreated = service.createTask('task0', 1, 'hello', 'world', 0, 'abc');
    expect(TaskCreated).toEqual(newTask);
  });

  it('should be edited with right value', () => {
    TaskCreated = service.createTask('task0', 1, 'hello', 'world', 0, 'abc');
    service.editTask(TaskCreated, 'edited', 2, TaskCreated.handler, TaskCreated.partner, TaskCreated.estimate, TaskCreated.notes);
    expect(TaskCreated).toEqual(editedTask);
  });
});
