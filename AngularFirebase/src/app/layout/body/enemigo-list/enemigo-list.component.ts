import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Enemigo } from 'src/app/Dto/enemigo';
import { EnemigoService } from 'src/app/Services/enemigo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enemigo-list',
  templateUrl: './enemigo-list.component.html',
  styleUrls: ['./enemigo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnemigoListComponent implements OnInit {
  
  displayedColumns: string[] = ['Id', 'Name', 'Edad', 'Description', 'Derrotas'];
  dataSource: Enemigo[];
  constructor(private enemigoService: EnemigoService,  private router: Router) { }

  ngOnInit() {
    this.getEnemigos();
  }

  getEnemigos(): void{
    this.enemigoService.getEnemigos()
      .subscribe(enemigos => this.dataSource = enemigos);
  }

  goToEnemigo(id:number){
    console.log('navegamos a '+id);
    this.router.navigateByUrl(`/enemigo/${id}`);
  }

}
