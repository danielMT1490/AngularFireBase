import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Enemigo } from '../Dto/enemigo';


@Injectable({
  providedIn: 'root'
})
export class EnemigoService {
   //definimos la url que consumiremos
   private enemigosUrl: string = 'api/enemigos';
   //creamos una variable donde añadiremos headers
   private httpOptions = 
   {
     headers : new HttpHeaders({'Content-Type':'application/json'})
   };

   constructor(private http: HttpClient) { }

   getEnemigos():Observable<Enemigo[]>{
      return this.http
      .get<Enemigo[]>(this.enemigosUrl)
      .pipe
      (
        //podemos usar el tap para lanzar efectos secundarios dentro el pipe
        tap(()=> console.log('fetched enemigos for http request')),
        catchError(this.handleError('getEnemigos',[]))
      );
   }

   getEnemigo(Id:number):Observable<Enemigo>{
      const url = `${this.enemigosUrl}/${Id}`;
      console.log('entramos en enemigo get: ' + url);
      return this.http
        .get<Enemigo>(url)
        .pipe
        (
          tap(()=> console.log(`fetched enemigo id=${Id} for http`)),
          catchError(this.handleError<Enemigo>(`getEnemigo id=${Id}`))
        );
   }

   //esta funcion recibe el nombre la operacion que debe controlarse , y el resultado si es fallido
   private handleError<T>(operation = 'operation', result? : T){
    return (error: any): Observable<T> => 
    {
      //logueamos el error en la consola
      console.error(error);
      //devolvemos el resultado
      return of(result as T); 
    }; 
  }
}
