import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent {
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
        { title: 'Видача документів', cols: 1, rows: 1, icon: 'playlist_add_check' },
        { title: 'Зберігання документів', cols: 1, rows: 1, icon: 'restore' },
        { title: 'Пенсійний архів', cols: 1, rows: 1, icon: 'people' },
        { title: 'Оцифрування даних', cols: 1, rows: 1, icon: 'backup' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
