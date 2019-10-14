import { Component, OnInit } from '@angular/core';
import { User } from '@ns/shared-lib';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        id: 'id1',
        name: 'Shankar',
        creation: new Date(),
        color: 'Yellow'
      },
      {
        id: 'id2',
        name: 'Suresh',
        creation: new Date(),
        color: 'Red'
      }
    ];
  }

}
