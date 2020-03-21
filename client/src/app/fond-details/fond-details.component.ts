import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-fond-details',
  templateUrl: './fond-details.component.html',
  styleUrls: ['./fond-details.component.scss']
})
export class FondDetailsComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Комунальне господарство', cols: 1, rows: 1, icon: 'playlist_add_check' },
          { title: 'Міський ліцей', cols: 1, rows: 1, icon: 'restore' },
          { title: 'Міська рада', cols: 1, rows: 1, icon: 'people' },
          { title: 'Школа №1', cols: 1, rows: 1, icon: 'backup' }
        ];
      }

      return [
        { id: 1, title: 'Комунальне господарство', cols: 1, rows: 1 },
        { id: 2, title: 'Міський ліцей', cols: 1, rows: 1 },
        { id: 3, title: 'Міська рада', cols: 1, rows: 1 },
        { id: 4, title: 'Школа №1', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
