import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ExsistingPatientComponent } from './exsisting-patient/exsisting-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'app-navbar',component:NavbarComponent},
  { path: 'add-patient', component: AddPatientComponent },  
  { path: 'view-patient', component: PatientListComponent },
  { path: 'existing-patient',component:ExsistingPatientComponent},
  { path: 'footer-patient', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
