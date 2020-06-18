import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'secondName', 'title', 'status'];
  dataSource = null;
  doAnswerVisible = false
  constructor(
    private forumService: ForumService,
  ) { }

  ngOnInit(): void {
    this.forumService.getTopics()
      .subscribe((res) => {
        this.dataSource = res.topics;
        console.log(res.topics)
      })
  }

  doAnswer(id) {
    this.doAnswerVisible = !this.doAnswerVisible;
    window.localStorage.removeItem('RequestId');
    window.localStorage.setItem('RequestId', JSON.stringify(id));
  }

}
