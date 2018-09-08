import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MzButtonModule, MzInputModule, MzCardModule, MzSidenavModule, MzIconModule, MzIconMdiModule,
  MzNavbarModule
} from 'ngx-materialize';

@NgModule({
  imports: [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSidenavModule,
    MzIconMdiModule,
    MzIconModule,
    MzNavbarModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSidenavModule,
    MzIconMdiModule,
    MzIconModule,
    MzNavbarModule
  ]
})
export class MaterializeModule { }
