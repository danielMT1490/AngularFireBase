import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { BodyModule } from './body/body.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations:
  [
    LayoutComponent,
    HeaderComponent, 
  ],
  imports: 
  [
    CommonModule,
    BodyModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  exports:
  [
    LayoutComponent
  ]
})
export class LayoutModule { }
