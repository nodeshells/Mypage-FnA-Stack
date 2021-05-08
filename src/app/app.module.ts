import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IonicModule} from '@ionic/angular';
import {IonicStorageModule} from '@ionic/storage';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {CoreModule} from './core/core.module';

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
        AppRoutingModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AngularFireModule.initializeApp(firebase),
        AngularFireAuthModule,
        AngularFirestoreModule.enablePersistence(),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
    }
}
