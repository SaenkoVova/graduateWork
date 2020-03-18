import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-fonds-list',
  templateUrl: './fonds-list.component.html',
  styleUrls: ['./fonds-list.component.scss']
})
export class FondsListComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Комунальне господарство', cols: 1, rows: 1, icon: 'playlist_add_check' },
        { title: 'Міський ліцей', cols: 1, rows: 1, icon: 'restore' },
        { title: 'Міська рада', cols: 1, rows: 1, icon: 'people' },
        { title: 'Школа №1', cols: 1, rows: 1, icon: 'backup' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
