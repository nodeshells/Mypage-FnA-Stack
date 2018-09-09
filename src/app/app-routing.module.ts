import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ToppageComponent } from './toppage/toppage.component';
import { MypageComponent } from './mypage/mypage.component';


const myRoutes = [
  { path: 'top', component: ToppageComponent },
  { path: 'profile', component: MypageComponent },
  { path: '**', redirectTo: 'top' },
];


@NgModule({
  imports: [RouterModule.forRoot(myRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
