import { Task } from '../entity/task';

let tasks: Task[] = [
    {name: 'Implement add task feature', ID: 1, estimate:0, handler:"hello", partner: "helllooo", notes: "nothing"},
    {name: 'Implement add user story feature', ID: 2, estimate:0, handler:"hello", partner: "helllooo", notes: "nothing"},
    {name: 'Task3.', estimate:0, handler:"hello", ID: 3, partner: "helllooo", notes: "nothing"},
    {name: 'Task4.', estimate:0, handler:"hello", ID: 4, partner: "helllooo", notes: "nothing"},
  ]

let newTask = new Task('task0', 1, 'hello', 'world', 0, 'abc');

let editedTask = new Task('edited', 2, 'hello', 'world', 0, 'abc');

export { tasks, newTask, editedTask }

