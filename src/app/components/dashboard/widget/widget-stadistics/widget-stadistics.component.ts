import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../services/config.service';
import { CommentService } from '../../../../services/comment.service';

@Component({
  selector: 'app-widget-stadistics',
  templateUrl: './widget-stadistics.component.html',
  styleUrls: ['./widget-stadistics.component.css']
})
export class WidgetStadisticsComponent implements OnInit {

  numUsers: number;
  numComments: number;
  numPosts: number;

  constructor(
    private config: ConfigService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.numUsers = this.config.numUsers;

    this.commentService.getComments().subscribe(listComments => {
      this.numComments = listComments.length;
    });

    this.numPosts = 20;
  }

}
