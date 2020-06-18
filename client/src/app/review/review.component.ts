import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviews = null

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService
  ) { }

  ngOnInit(): void {
    const topicId = this.route.snapshot.params.topicId;
    this.getReviewsForTopic(topicId)
  }
  getReviewsForTopic(topicId) {
    this.forumService.getReviewsForTopic(topicId)
      .subscribe((data) => {
        this.reviews = data.reviews;
      })
  }

}
