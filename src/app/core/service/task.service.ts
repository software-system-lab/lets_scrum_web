import { Injectable } from '@angular/core';
import { Task } from '../entity/task';
import { tasks } from './mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask() :Task[] {
    return tasks;
  }
  createTask(name: string, ID: number, handler: string, partner: string, estimate: number, notes: string) : Task {
    let newTask = new Task(name, ID, handler, partner, estimate, notes);
    return newTask;
  }
  editTask(currentTask: Task, name: string, ID: number, handler: string, partner: string, estimate: number, notes: string) : Task {
    currentTask.name = name;
    currentTask.ID = ID;
    currentTask.handler = handler;
    currentTask.partner = partner;
    currentTask.estimate = estimate;
    currentTask.notes = notes;
    return currentTask;
  }
}
