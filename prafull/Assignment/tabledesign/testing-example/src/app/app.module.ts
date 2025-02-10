import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BannerComponent } from './banner/banner.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FilterComponent } from './filter/filter.component';
import { ParagraphComponent } from './paragraph/paragraph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    BannerComponent,
    FileuploadComponent,
    FilterComponent,
    ParagraphComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
