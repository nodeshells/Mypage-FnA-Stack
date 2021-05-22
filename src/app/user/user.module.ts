import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ToppageComponent} from './pages/toppage/toppage.component';

const routes: Routes = [
    {path: 'top', component: ToppageComponent},
    {path: 'profile', loadChildren: () => import('./pages/mypage/mypage.module').then(m => m.MypagePageModule)},
    {path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogPageModule)},
    {path: 'clicker', loadChildren: () => import('./pages/clicker/clicker.module').then(m => m.ClickerPageModule)},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ToppageComponent]
})
export class UserPageModule {
}
