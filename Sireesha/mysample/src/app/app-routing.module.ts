import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ass1Component } from './Assignment/ass1/ass1.component';
import { Ass1contactComponent } from './Assignment/ass1contact/ass1contact.component';
import { Ass1footerComponent } from './Assignment/ass1footer/ass1footer.component';
import { Ass1homeComponent } from './Assignment/ass1home/ass1home.component';
import { Ass1templateComponent } from './Assignment/ass1template/ass1template.component';
import { Assign14bodyComponent } from './component/Assignment14/assign14body/assign14body.component';
import { Assign14headerComponent } from './component/Assignment14/assign14header/assign14header.component';
import { Assign14indexComponent } from './component/Assignment14/assign14index/assign14index.component';
import { Assign14navigationComponent } from './component/Assignment14/assign14navigation/assign14navigation.component';

const routes: Routes = [
  {path: "Home", component: Assign14bodyComponent},
  {path: "About Us", component: Assign14headerComponent},
  {path: "Contact", component: Assign14navigationComponent},
  // {path: "Images", component: Assign14indexComponent},
  {path: "HOME", component: Ass1homeComponent},
  {path: "CONTACT", component:Ass1contactComponent},
  {path: "TEMPLATE", component:Ass1templateComponent},
  {path:"",component:Ass1homeComponent},
  {path:"**",component:Ass1footerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
