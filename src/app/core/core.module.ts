import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotfoundComponent} from './components/error/page-notfound/page-notfound.component';
import {SidemenuComponent} from './components/sidemenu/sidemenu.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        PageNotfoundComponent,
        SidemenuComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports: [
        PageNotfoundComponent,
        SidemenuComponent]
})
export class CoreModule {
}
