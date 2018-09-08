import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HelloComponent } from './hello/hello.component';


const myRoutes = [
  { path: '', component: HelloComponent },
  { path: '**', component: HelloComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(myRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
