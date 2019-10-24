import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
//importa todo lo del paquete dentro de la variable firebase
import * as firebase from 'firebase';
import { Profile } from 'selenium-webdriver/firefox';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //indicamos que de primeras no estamos loggeados
  private isLogged: boolean = false;

  constructor(private router :Router, public afAuth: AngularFireAuth) {
  }

  isLoggedIn():boolean{
    return this.isLogged
  }
  //creamos una promesa para que espere respuesta
  logIn(){
    return new Promise(async (resolve) => 
    {
      //provider de auth
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      //espera la respuesta de la autentificacion
      const response = await this.afAuth.auth.signInWithPopup(provider);
      
      console.log(response);
      if (response.user) {
        this.isLogged = true;
      }
      //añadimos la despuesta a la promesa
      resolve(response.user.displayName);
    })
  }

  logOut(){
    firebase.auth()
      .signOut()
      .then
      (
        x => {
          this.isLogged = false;
          this.router.navigateByUrl('/');
        }
      );
  }
}
