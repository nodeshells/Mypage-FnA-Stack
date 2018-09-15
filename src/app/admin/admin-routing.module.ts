import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { TopComponent } from './top/top.component';

export const myRoutes: Routes = [
  { path: 'top', component: TopComponent }
];

export class AdminRoutingModule { }
