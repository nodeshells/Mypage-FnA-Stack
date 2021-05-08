import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/authguard/auth.guard';
import {PageNotfoundComponent} from './core/components/error/page-notfound/page-notfound.component';


const myRoutes: Routes = [
    {
        path: 'site',
        loadChildren: () => import('./user/user.module').then(m => m.UserPageModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
    },
    // {path: 'profile', loadChildren: () => import('./mypage/mypage.module').then(m => m.MypagePageModule)},
    // {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogPageModule)},
    // {path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)},
    {path: '', redirectTo: '/site/top', pathMatch: 'full'},
    {path: '**', component: PageNotfoundComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(myRoutes, {
        preloadingStrategy: PreloadAllModules,
        relativeLinkResolution: 'legacy'
    })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {
}
