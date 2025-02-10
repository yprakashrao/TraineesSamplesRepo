import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';

import { JobprofileComponent } from './jobprofile/jobprofile.component';
import { PersonalComponent } from './personal/personal.component';
import { QualificationComponent } from './qualification/qualification.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personal' },
  {
    path: 'personal',
    component: PersonalComponent,
  },
  {
    path: 'qualification',
    component: QualificationComponent,
  },
  {
    path: 'address',
    component: AddressComponent,
  },
  {
    path: 'jobprofile',
    component: JobprofileComponent,
  },
  {
    path: 'confirmpage',
    component: ConfirmpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
