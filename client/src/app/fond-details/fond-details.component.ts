import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-fond-details',
  templateUrl: './fond-details.component.html',
  styleUrls: ['./fond-details.component.scss']
})
export class FondDetailsComponent implements OnInit {

  fondName = null;

  constructor() { }

  ngOnInit(): void {
  }
  setTitle(event) {
    this.fondName = event
  }
}
