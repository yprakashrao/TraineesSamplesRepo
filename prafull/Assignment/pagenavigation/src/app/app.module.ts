import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { PersonalComponent } from './personal/personal.component';
import { QualificationComponent } from './qualification/qualification.component';
import { AddressComponent } from './address/address.component';
import { JobprofileComponent } from './jobprofile/jobprofile.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    QualificationComponent,
    AddressComponent,
    JobprofileComponent,
    ConfirmpageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
