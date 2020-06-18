import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { JwtService } from '../services/jwt.service';
import { Router } from '@angular/router';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  topics = [];
  secondFormGroup: FormGroup;
  stepperVisible = false;

  constructor(
    private forumService: ForumService,
    private _formBuilder: FormBuilder,
    private jwtService: JwtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forumService.getTopics()
      .subscribe((data) => {
        this.topics = data.topics;
      })

      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });

  }
  toggleStepperVisible() {
    this.stepperVisible = !this.stepperVisible;
  }
  doQuestion() {
    if(this.jwtService.getToken()) {
      this.forumService.doQuestion(this.secondFormGroup.value.secondCtrl, this.jwtService.getToken())
        .subscribe((res) => {
          this.topics.unshift(res.lastInsertedTopic[0]);
          this.stepperVisible = false;
        },
        (err) => {
          alert('Щоб залишити питання авторизуйтесь, будь ласка')
        })
    }
    else {
      alert('Щоб залишити питання авторизуйтесь, будь ласка')
    }
  }
}
