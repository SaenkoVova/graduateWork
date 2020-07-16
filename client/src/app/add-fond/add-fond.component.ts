import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FondsService } from '../services/fonds.service';
import {MatSnackBar} from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-fond',
  templateUrl: './add-fond.component.html',
  styleUrls: ['./add-fond.component.scss']
})

export class AddFondComponent implements OnInit {

  @Output() onClose = new EventEmitter();

  fondNumber = '';
  fondName = '';

  constructor(
    private fondService: FondsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  addFond() {
    console.log(this.fondNumber, this.fondName)
    const fond = {
      fondNumber: this.fondNumber,
      fondName: this.fondName
    }
    this.fondService.addFond(fond)
      .subscribe((data) => {
        this.onClose.emit();
        this.openSnackBar(data.message, 'ок');
      },
      (err) => {
        console.log(err)
      })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
