import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { EnemigoListComponent } from './enemigo-list/enemigo-list.component';
import { EnemigoDetailComponent } from './enemigo-detail/enemigo-detail.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from "@angular/router";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthGuard } from 'src/app/auth.guard';

const routes : Routes = [
  {path:'', component: EnemigoListComponent},
  {
    path: 'enemigo/:Id',
    canActivate: [AuthGuard], 
    component: EnemigoDetailComponent},
  //cualquier parametro redirecionamos al raiz
  {path:'**', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  declarations: [BodyComponent, EnemigoListComponent, EnemigoDetailComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  exports:[BodyComponent,RouterModule]
})
export class BodyModule { }
