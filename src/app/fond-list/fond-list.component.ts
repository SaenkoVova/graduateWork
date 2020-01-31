import { Component, OnInit } from '@angular/core';
import { FondsService } from '../services/fonds.service';

@Component({
  selector: 'app-fond-list',
  templateUrl: './fond-list.component.html',
  styleUrls: ['./fond-list.component.scss']
})
export class FondListComponent implements OnInit {
  cards = [];
  cardsLength;
  pageSize = 5;
  pageIndex;

  constructor(
    private fondService: FondsService
  ) {}

  ngOnInit() {
    this.getCards()
      .then((...cards) => {
        this.cardsLength = cards.length;
      })
      console.log(this.pageIndex)
  }
  
  getCards() {
    return new Promise((resolve, reject) => {
      this.fondService.getFonds(this.pageSize, this.pageIndex).subscribe(actionArray => {
        this.cards = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...(item.payload.doc.data() as Object)
          } as Object;
        });
      
      });
      resolve(this.cards);
    });
  }
}
