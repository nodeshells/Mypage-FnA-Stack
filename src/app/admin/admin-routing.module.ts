import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate, PreloadingStrategy, PreloadAllModules} from '@angular/router';
import {TopComponent} from './top/top.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';

export const myRoutes: Routes = [
  {path: 'top', component: TopComponent},
  {path: 'edit-profile', component: EditProfileComponent}
];

export class AdminRoutingModule {
}
