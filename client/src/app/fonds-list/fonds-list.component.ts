import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {FondsService} from "../services/fonds.service";
import { AuthService } from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-fonds-list',
  templateUrl: './fonds-list.component.html',
  styleUrls: ['./fonds-list.component.scss']
})
export class FondsListComponent implements OnInit {

  @Input() fonds = [];

  dialogVisible = false

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
    private fondsService: FondsService,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addToProfile(fondId) {

    this.authService.currentUser.subscribe((data) => {
      if(this.isEmpty(data)) {
        this.dialogVisible = true;
      }
      else {
        this.fondsService.addToProfile(fondId)
          .subscribe((res) => {
            this.openSnackBar(res.message, 'ок');
          })
      }
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  closeDialog() {
    this.dialogVisible = false;
  }
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
}
