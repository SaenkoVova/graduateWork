import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-doanswer',
  templateUrl: './doanswer.component.html',
  styleUrls: ['./doanswer.component.scss']
})
export class DoanswerComponent implements OnInit {


  @Output() onClose = new EventEmitter();

  answer = '';

  constructor(
    private forumService: ForumService
  ) { }

  ngOnInit(): void {

  }

  doAnswer() {
    this.forumService.doAnswer(JSON.parse(window.localStorage.getItem('RequestId')), this.answer)
      .subscribe((data) => {
        this.onClose.emit();
      })
  }

}
