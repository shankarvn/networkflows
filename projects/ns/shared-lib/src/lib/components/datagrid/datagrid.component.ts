import { Component, OnInit, Input } from '@angular/core';
import { User } from './model';

@Component({
  selector: 'lib-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

  @Input()
  users: User[];

  constructor() { }

  ngOnInit() {
  }

}
