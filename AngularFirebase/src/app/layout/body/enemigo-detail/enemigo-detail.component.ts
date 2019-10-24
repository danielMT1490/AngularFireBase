import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Enemigo } from 'src/app/Dto/enemigo';
import { EnemigoService } from 'src/app/Services/enemigo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-enemigo-detail',
  templateUrl: './enemigo-detail.component.html',
  styleUrls: ['./enemigo-detail.component.scss'],
})
export class EnemigoDetailComponent implements OnInit {

  enemigo: Enemigo;
  isLoading = false;

  constructor
  (
    private enemigoService: EnemigoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEnemigo();
  }

  getEnemigo(): void{
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('Id');
    console.log(id);
    this.enemigoService
      .getEnemigo(id)
      .subscribe(enemigo => {
        console.log(enemigo);
        this.enemigo = enemigo;
        this.isLoading = false;
      }); 

    
  }

  goBack(): void {
    this.location.back();
  }
}
