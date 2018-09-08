import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ToppageComponent } from './toppage/toppage.component';


const myRoutes = [
  { path: '', component: ToppageComponent },
  { path: '**', component: ToppageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(myRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
