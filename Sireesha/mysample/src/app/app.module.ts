import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeinlineComponent } from './component/homeinline.component';
import { loginComponent } from './component/login[codebehind]/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NetflixindexComponent } from './component/netflix/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './component/netflix/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './component/netflix/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './component/netflix/netflixregister/netflixregister.component';
import { Assign14indexComponent } from './component/Assignment14/assign14index/assign14index.component';
import { Assign14headerComponent } from './component/Assignment14/assign14header/assign14header.component';
import { Assign14bodyComponent } from './component/Assignment14/assign14body/assign14body.component';
import { Assign14navigationComponent } from './component/Assignment14/assign14navigation/assign14navigation.component';
import { Ass1Component } from './Assignment/ass1/ass1.component';
import { Ass1homeComponent } from './Assignment/ass1home/ass1home.component';
import { Ass1templateComponent } from './Assignment/ass1template/ass1template.component';
import { Ass1contactComponent } from './Assignment/ass1contact/ass1contact.component';
import { Ass1footerComponent } from './Assignment/ass1footer/ass1footer.component';
import { Ass1indexComponent } from './Assignment/ass1index/ass1index.component';



@NgModule({
  declarations: [
    AppComponent,
    homeinlineComponent,
    loginComponent,
    RegisterComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    Assign14indexComponent,
    Assign14headerComponent,
    Assign14bodyComponent,
    Assign14navigationComponent,
    Ass1Component,
    Ass1homeComponent,
    Ass1templateComponent,
    Ass1contactComponent,
    Ass1footerComponent,
    Ass1indexComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Ass1indexComponent]
})
export class AppModule { }
