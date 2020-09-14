import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface MenuNode {
  name: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Project Configuration',
    children: [
      {name: 'Summary'},
      {name: 'Members'},
    ]
  },
  {
    name: 'Project Management',
    children: [
      {name: 'Product Backlog'},
      {name: 'Release Plan'},
      {name: 'Sprint Plan'},
      {name: 'Sprint Backlog'},
      {name: 'TaskBoard'},
      {name: 'Scrum Report'},
    ]
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;

}
