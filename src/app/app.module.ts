import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {ColorSketchModule} from 'ngx-color/sketch';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {IonicStorageModule} from '@ionic/storage';

const firebase = {
  apiKey: 'AIzaSyDXAkI4db4eoTnfXbzTCYJ-_Hlh7mA3RKo',
  authDomain: 'my-portfolio-46601.firebaseapp.com',
  databaseURL: 'https://my-portfolio-46601.firebaseio.com',
  projectId: 'my-portfolio-46601',
  storageBucket: 'my-portfolio-46601.appspot.com',
  messagingSenderId: '127553745692'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    ColorSketchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
