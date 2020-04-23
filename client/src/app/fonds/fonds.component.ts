import { Component, OnInit } from '@angular/core';
import {FondsService} from '../services/fonds.service';
import {NgProgressService} from '../services/ng-progress.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-fonds',
  templateUrl: './fonds.component.html',
  styleUrls: ['./fonds.component.scss']
})
export class FondsComponent implements OnInit {

  fonds = [];
  length;
  pageSize = 10;
  pageIndex = 0;
  pageEvent: PageEvent;

  constructor(
    private fondsService: FondsService,
    private ngProgressService: NgProgressService
  ) { }

  ngOnInit(): void {
    this.getFonds(this.pageSize, this.pageIndex);
  }

  getFonds(pageSize, pageIndex) {
    this.ngProgressService.ngProgressComplete();
    this.ngProgressService.ngProgressStart();
    this.fondsService.getFonds(pageSize, pageIndex)
      .subscribe(data => {
        this.fonds = data.array;
        this.length = data.length;
        this.ngProgressService.ngProgressComplete();
      });
  }
  togglePage(event): PageEvent {
    this.fonds = [];
    this.getFonds(event.pageSize, event.pageIndex);
    return;
  }

}
