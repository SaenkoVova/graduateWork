import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {JwtService} from "../services/jwt.service";
import {FondsService} from "../services/fonds.service";

@Component({
  selector: 'app-fonds-list',
  templateUrl: './fonds-list.component.html',
  styleUrls: ['./fonds-list.component.scss']
})
export class FondsListComponent implements OnInit {

  @Input() fonds = [];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.fonds;
      }
      return this.fonds;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fondsService: FondsService
  ) { }

  ngOnInit(): void {
  }

  addToProfile(fondId) {
    this.fondsService.addToProfile(fondId)
      .subscribe((data) => {
          console.log(data);
      });

  }
}
