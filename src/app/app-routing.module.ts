import {NgModule} from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {AuthGuard} from './shared/authguard/auth.guard';
import {UserService} from './shared/authguard/user.service';


const myRoutes = [
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'top', loadChildren: () => import('./top/top.module').then(m => m.TopPageModule)},
  {path: 'profile', loadChildren: () => import('./mypage/mypage.module').then(m => m.MypagePageModule)},
  {path: '**', redirectTo: 'top'},
];


@NgModule({
  imports: [RouterModule.forRoot(myRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard, UserService]
})
export class AppRoutingModule {
}
