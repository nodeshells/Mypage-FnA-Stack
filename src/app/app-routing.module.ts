import {NgModule} from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {ToppageComponent} from './toppage/toppage.component';
import {MypageComponent} from './mypage/mypage.component';
import {AuthGuard} from './shared/authguard/auth.guard';
import {UserService} from './shared/authguard/user.service';


const myRoutes = [
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'top', component: ToppageComponent},
  {path: 'profile', component: MypageComponent},
  {path: '**', redirectTo: 'top'},
];


@NgModule({
  imports: [RouterModule.forRoot(myRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard, UserService]
})
export class AppRoutingModule {
}
