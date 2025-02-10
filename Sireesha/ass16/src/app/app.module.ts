import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { QualificationdetailsComponent } from './qualificationdetails/qualificationdetails.component';
import { TechnicaldetailsComponent } from './technicaldetails/technicaldetails.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { SidenavlandingComponent } from './sidenavlanding/sidenavlanding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list'; 
import { MatTableModule } from '@angular/material/table' 


@NgModule({
  declarations: [
    AppComponent,
    PersonalinfoComponent,
    QualificationdetailsComponent,
    TechnicaldetailsComponent,
    SkillsetComponent,
    JobdetailsComponent,
    SidenavlandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
