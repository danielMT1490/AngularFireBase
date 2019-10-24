import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importamos nuestros modulo de http
import { HttpClientModule } from "@angular/common/http";
//para hacer las peticiones instalamos un servidor ficticio
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//esta interface es un servicio donde diremos lo que debe responder el servidor
import { InMemoryDataService }  from './Services/in-memory-data.service'; 

import { AppComponent } from './app.component';
//importamos modulo de angular material
import { LayoutModule } from './layout/layout.module';
//importamos modulos de firebase para autentificacion
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
