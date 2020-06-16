import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../services/config.service';

import * as moment from 'moment';

@Component({
  selector: 'app-widget-last-visits',
  templateUrl: './widget-last-visits.component.html',
  styleUrls: ['./widget-last-visits.component.css']
})
export class WidgetLastVisitsComponent implements OnInit {

  public data: any;
  public options: any;

  constructor(
    private config: ConfigService,
  ) {
    this.options = {
      legend: {
        display: false
      }
    };

    this.buildData();

   }

  ngOnInit(): void {
  }

  private buildData() {

    this.data = {
      labels: [],
      datasets: [
        {
          data: [],
          borderColor: '#565656'
        }
      ]
    };

    for (let i = 0; i < 10; i++) {
      const rand = Math.floor(Math.random() * (this.config.max - this.config.min) + this.config.min);
      this.data.datasets[0].data.push(rand);

      // tslint:disable-next-line: deprecation
      const day = moment().subtract('days', i).format('MMM-DD');

      this.data.labels.push(day);
    }
  }

}
