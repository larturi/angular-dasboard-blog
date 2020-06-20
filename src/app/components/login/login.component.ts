import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { ILogin } from '../../interfaces/ilogin';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showLoginError: boolean = false;
  public infoLogin: ILogin;

  constructor(
    public config: ConfigService,
    private authService: AuthService,
    private router: Router
  ) {
    this.infoLogin = {
      email: '',
      password: ''
    };
   }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/resume']);
    }
  }

  checkLogin() {
    this.authService.login(this.infoLogin).then(success => {

      if (success) {
        this.authService.isLogged = true;
        this.router.navigate(['/resume']);
      }
    }, error => {
      this.showLoginError = true;
      console.error(error);
    });
  }

}
