import { Component, OnInit } from '@angular/core';
import { FondsService } from '../services/fonds.service';
import { PageEvent } from '@angular/material/paginator';
import { NgprogressService } from '../services/ngprogress.service';

@Component({
  selector: 'app-fond-list',
  templateUrl: './fond-list.component.html',
  styleUrls: ['./fond-list.component.scss']
})
export class FondListComponent implements OnInit {
  cards = [];
  cardForShow = [];
  pageEvent: PageEvent;
  pageIndex = 0;
  pageSize = 6;
  length = 0;

  constructor(
    private fondService: FondsService,
    private ngProgressService: NgprogressService
  ) {}

  ngOnInit() {
    this.getCards()
      .then(() => {
        this.length = this.cards.length;
        this.cardForShow = this.cards.slice(0, this.pageSize);
        this.ngProgressService.ngProgressComplete();
      })
  }
  
  getCards() {
    return new Promise((resolve, reject) => {
      this.ngProgressService.ngProgressStart();
      this.fondService.getFonds().subscribe(actionArray => {
        this.cards = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...(item.payload.doc.data() as Object)
          } as Object;
        });
      resolve();
      });
    });
  }
  togglePage(event) {
    this.cardForShow = this.cards.slice(event.pageIndex * event.pageSize, (event.pageIndex * event.pageSize) + event.pageSize);
  }
}
