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
  
}
