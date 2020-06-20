import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ILogin } from '../interfaces/ilogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
       if (user) {
         this._isLogged = true;
         this.router.navigate(['/resume']);
       }
    });
  }

  public set isLogged(value: boolean) {
    this._isLogged = value;
  }

  login(infoLogin: ILogin) {
    return this.afAuth.auth.signInWithEmailAndPassword(infoLogin.email, infoLogin.password);
  }

  isAuthenticated() {
    return this._isLogged;
  }

  logout() {
    this.afAuth.auth.signOut();
    this._isLogged = false;
    this.router.navigate(['/login']);
  }

}
