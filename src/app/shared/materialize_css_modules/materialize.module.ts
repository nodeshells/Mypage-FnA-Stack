import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MzButtonModule, MzInputModule, MzCardModule, MzSidenavModule, MzIconModule, MzIconMdiModule,
  MzNavbarModule, MzCheckboxModule, MzCollectionModule, MzParallaxModule, MzSpinnerModule, MzSwitchModule
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
    MzParallaxModule,
    MzSpinnerModule,
    MzSwitchModule,
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
    MzParallaxModule,
    MzSpinnerModule,
    MzSwitchModule,
  ]
})
export class MaterializeModule {
}
