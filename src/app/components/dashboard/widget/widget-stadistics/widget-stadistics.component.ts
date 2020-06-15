import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../services/config.service';

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
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.numUsers = this.config.numUsers;
    this.numComments = 5;
    this.numPosts = 20;
  }

}
