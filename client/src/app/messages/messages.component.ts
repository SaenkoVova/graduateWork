import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  secondName: string;
  message: string;
  read: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Володимир', secondName: 'Саєнко', message: 'This is a simple message', read: false},
  {id: 2, name: 'User', secondName: 'Test', message: 'This is a simple test message', read: true},

];

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'secondName', 'message', 'read'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
