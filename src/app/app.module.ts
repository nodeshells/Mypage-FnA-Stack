import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SharedModule } from './shared/shared.module';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
