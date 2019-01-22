import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { FormsModule }   from '@angular/forms';

import { HomePage } from '../pages/home/home';
import { GraficasPage } from '../pages/graficas/graficas';
import { TabsPage } from '../pages/tabs/tabs';
import { TermometroPage } from '../pages/termometro/termometro';

import { FirebaseProvider } from '../providers/firebase/firebase';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { PrincipalPage } from '../pages/principal/principal';

// plugins
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import thermometer from 'fusioncharts/viz/thermometer';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import { environment } from '../config/firebase';
// Include Below Snippet
FusionChartsModule.fcRoot(FusionCharts, thermometer, FusionTheme);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PrincipalPage,
    GraficasPage,
    TermometroPage
  ],
  imports: [
  
  BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    FusionChartsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PrincipalPage,
    GraficasPage,
    TermometroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
