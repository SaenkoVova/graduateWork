import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CaseService } from '../services/case.service';
import { NgprogressService } from '../services/ngprogress.service';
import {Case} from '../models/case';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {
  cards = [];
  length = 100;
  pageSize = 3;
  pageIndex = 0;
  pageEvent: PageEvent;
  startAt = 1;
  endAt = this.pageSize;

  constructor(
    private caseService: CaseService,
    private ngProgressService: NgprogressService
  ) { }

  ngOnInit() {
    this.getCards(this.pageSize, this.startAt, this.endAt)
      .then(() => {
        this.ngProgressService.ngProgressComplete();
      });
  }
  getCards(pageSize, startAt, endAt) {
    return new Promise((resolve, reject) => {
      this.ngProgressService.ngProgressStart();
      this.caseService.getCases(pageSize, startAt, endAt).subscribe(actionArray => {
        this.cards = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...(item.payload.doc.data() as Case)
          } as Case;
        });
        resolve();
      });
    });
  }
  togglePage(event) {
    this.startAt = event.pageIndex * event.pageSize + 1;
    this.endAt = (event.pageIndex * event.pageSize) + event.pageSize;
    this.getCards(event.pageSize, this.startAt, this.endAt).then(r => {
      this.ngProgressService.ngProgressComplete();
    });
  }
}
