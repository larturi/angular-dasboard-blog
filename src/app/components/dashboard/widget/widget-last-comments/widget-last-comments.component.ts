import { Component, OnInit } from '@angular/core';
import { IComment } from '../../../../interfaces/icomment';
import { CommentService } from '../../../../services/comment.service';

@Component({
  selector: 'app-widget-last-comments',
  templateUrl: './widget-last-comments.component.html',
  styleUrls: ['./widget-last-comments.component.css']
})
export class WidgetLastCommentsComponent implements OnInit {

  public listComments: IComment[] = [];

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.commentService.getLastComments().subscribe(lastComments => {
       this.listComments = lastComments;
       console.log(lastComments);
    });
  }

}
