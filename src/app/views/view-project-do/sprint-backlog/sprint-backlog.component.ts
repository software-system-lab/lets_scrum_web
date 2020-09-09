import { Component } from '@angular/core';
import { Sprint } from '../../../core/entity/sprint';
import { Story } from '../../../core/entity/story';
import { Task } from '../../../core/entity/task';

import { SprintBacklogService } from '../../../core/service/sprint-backlog.service';

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
  private sprintBacklogService:SprintBacklogService;
  constructor(  sprintBacklogService:SprintBacklogService ) {
    this.sprintBacklogService = sprintBacklogService;
    this.sprintBacklogService.getMockData();
  }  
  
  //----------------------------------------Sprints
  getSprintList(): Sprint[] {
    return this.sprintBacklogService.getSprintList();
  }
  /**
   * to show the sprintlist
   * 
   * return (Sprint[])
   * member of SprintBacklogComponent 
  **/


  //----------------------------------------Stories
  // Stories: Story[] ;

  getStoryList(): Story[] {
    return this.sprintBacklogService.getStoryList();
  }
  /**
   * to show the storylist
   * 
   * return (Story[])
   * member of SprintBacklogComponent 
  **/
  

  // deleteStory(index: number): void{
  //   this.Stories.splice(index, 1);
  // }
  //-----------------------------------------Tasks
  Tasks: Task[];
  
  //-----------------------------------------

  public handleClick(event: MouseEvent): void {
    alert('clicked!');
  }


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