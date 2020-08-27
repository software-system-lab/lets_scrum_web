import { Component } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  ID: number;
  Importance: number;
  Tag: string;
  Estimate: number;
  Status: string;
  Handler: string;
}

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

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Name: 'ez scrum', Importance: 99, Tag: 'LetsScrum', Estimate:0, Handler:"hello", Status: "new"},
];

@Component({
  selector: 'app-sprint-backlog',
  templateUrl: './sprint-backlog.component.html',
  styleUrls: ['./sprint-backlog.component.css']
})
export class SprintBacklogComponent {
  displayedColumns: string[] = ['ID', 'Tag', 'Name', 'Importance', 'Estimate', 'Handler', 'Status'];
  dataSource = ELEMENT_DATA;
  sprints: Sprint[] = [
    {value: 1, viewValue: 'Sprint #1'},
    {value: 2, viewValue: 'Sprint #2'},
    {value: 3, viewValue: 'Sprint #3'},
  ];
  selected = 3;

  tiles: Tile[] = [
    {text: 'Add Story', cols: 1, rows: 1, color:'lightblue', icon:'add_box'},
    {text: 'Add Existing Story', cols: 1, rows: 1, color:'lightblue', icon:'note_add'},
    {text: 'Printable Stories', cols: 1, rows: 1, color:'lightblue', icon:'print'},
    {text: 'Sprint Information', cols: 1, rows: 1, color:'lightblue', icon:'wysiwyg'},
    {text: 'Edit Sprint', cols: 1, rows: 1, color:'lightblue', icon:'edit'},
  ];

  storytiles: Tile[] = [
    {text: 'Edit Story', cols: 1, rows: 1, color:'lightblue', icon:'edit'},
    {text: 'Drop Story', cols: 1, rows: 1, color:'lightblue', icon:'delete'},
    {text: 'Story History', cols: 1, rows: 1, color:'lightblue', icon:'history_edu'},
    {text: 'Add Task', cols: 1, rows: 1, color:'lightblue', icon:'add_box'},
    {text: 'Add Existing Task', cols: 1, rows: 1, color:'lightblue', icon:'note_add'},
    {text: 'Move Story', cols: 1, rows: 1, color:'lightblue', icon:'double_arrow'},
  ];

  tasktiles: Tile[] = [
    {text: 'Edit Task', cols: 1, rows: 1, color:'lightblue', icon:'edit'},
    {text: 'Drop Task', cols: 1, rows: 1, color:'lightblue', icon:'delete'},
    {text: 'Task History', cols: 1, rows: 1, color:'lightblue', icon:'history_edu'},
  ];
}
