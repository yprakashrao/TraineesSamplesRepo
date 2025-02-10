import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { QualificationdetailsComponent } from './qualificationdetails/qualificationdetails.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { TechnicaldetailsComponent } from './technicaldetails/technicaldetails.component';

const routes: Routes = [
  {path:"",component:PersonalinfoComponent},
  {path:"personal",component:PersonalinfoComponent},
  {path:"qualification",component:QualificationdetailsComponent},
  {path:"job",component:JobdetailsComponent},
  {path:"skill",component:SkillsetComponent},
  {path:"technical",component:TechnicaldetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
