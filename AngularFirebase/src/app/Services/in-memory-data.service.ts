import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Enemigo } from '../Dto/enemigo';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{
  //Implementamos la interface
  //la url sera api/heroes por que heroes es el indice de los objetos
  createDb() 
  {
    const enemigos = [
      { id: 11, Name: 'Enigma', Edad:23, Description: 'El villano de los enigmas', Derrotas: 10 },
      { id: 12, Name: 'Joker', Edad:50, Description: 'El payaso loco', Derrotas: 18 },
      { id: 13, Name: 'Pingüino', Edad:45, Description: 'El rey de los gansters', Derrotas: 25 },
      { id: 14, Name: 'MrFrezee', Edad:23, Description: 'Te dejara helado', Derrotas: 26 }
    ];
    return {enemigos};
  };

  genId(heroes: Enemigo[]): number
  {
    return heroes.length > 0 ? 
      Math.max(...heroes.map(hero => hero.id))+ 1 
      : 11;
  }
}