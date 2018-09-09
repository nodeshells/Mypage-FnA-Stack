import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MzButtonModule, MzInputModule, MzCardModule, MzSidenavModule, MzIconModule, MzIconMdiModule,
  MzNavbarModule, MzCheckboxModule, MzCollectionModule, MzParallaxModule
} from 'ngx-materialize';

@NgModule({
  imports: [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSidenavModule,
    MzIconMdiModule,
    MzIconModule,
    MzNavbarModule,
    MzCheckboxModule,
    MzCollectionModule,
    MzParallaxModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSidenavModule,
    MzIconMdiModule,
    MzIconModule,
    MzNavbarModule,
    MzCheckboxModule,
    MzCollectionModule,
    MzParallaxModule
  ]
})
export class MaterializeModule { }
