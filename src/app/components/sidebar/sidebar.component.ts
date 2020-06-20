import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public configService: ConfigService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {}

}
