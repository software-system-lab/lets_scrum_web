import { Component } from '@angular/core';
import { Story } from '../../../core/entity/story';
import { StoryService } from '../../../core/service/story.service';
import { Task } from '../../../core/entity/task';
import { TaskService } from '../../../core/service/task.service';

interface Sprint {
  value: number;
  viewValue: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-sprint-backlog',
  templateUrl: './sprint-backlog.component.html',
  styleUrls: ['./sprint-backlog.component.css']
})


export class SprintBacklogComponent {

  constructor(private storyService: StoryService, private taskService: TaskService) {
    this.getStories();
    this.getTasks();
  }  
  
  //----------------------------------------Stories
  Stories: Story[] ;
  private getStories() : void {
    this.Stories = this.storyService.getStory();
  }

  createEmptyStory() : void {
    this.Stories.push(this.storyService.createStory('', 0, 0, 0, '', []));
  }
  //-----------------------------------------Tasks
  Tasks: Task[];
  private getTasks() : void {
    this.Tasks = this.taskService.getTask();
  }

  createTask() : void {
    this.Tasks.push(this.taskService.createTask('task0', 1, 'hello', 'world', 0, 'abc'));
  }
  //-----------------------------------------

  public handleClick(event: MouseEvent): void {
    alert('clicked!');
  }

  sprints: Sprint[] = [
    {value: 1, viewValue: 'Sprint #1'},
    {value: 2, viewValue: 'Sprint #2'},
    {value: 3, viewValue: 'Sprint #3'},
  ];
  selected = 3;

  tiles: Tile[] = [
    {text: 'Printable Stories', cols: 1, rows: 1, color:'lightblue', icon:'print'},
    {text: 'Sprint Information', cols: 1, rows: 1, color:'lightblue', icon:'wysiwyg'},
    {text: 'Edit Sprint', cols: 1, rows: 1, color:'lightblue', icon:'edit'},
  ];

  storytiles: Tile[] = [
    {text: 'Move Story', cols: 1, rows: 1, color:'lightblue', icon:'double_arrow'},
  ];

  tasktiles: Tile[] = [
    {text: 'Edit Task', cols: 1, rows: 1, color:'lightblue', icon:'edit'},
    {text: 'Drop Task', cols: 1, rows: 1, color:'lightblue', icon:'delete'},
    {text: 'Task History', cols: 1, rows: 1, color:'lightblue', icon:'history_edu'},
  ];

}