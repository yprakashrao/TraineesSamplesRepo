import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AnotateDetailComponent } from './anotate-detail/anotate-detail.component';
import { AuthguardGuard } from './authguard.guard';
import { DummyCompComponent } from './Dictionary-FormDetail/dictionary-FormDetail.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';
import { DictionaryModule } from './Modules/dictionary/dictionary.module';
import { ProgramdataComponent } from './programdata/programdata.component';
import { QualitycheckComponent } from './qualitycheck/qualitycheck.component';
import { QualitydataComponent } from './qualitydata/qualitydata.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponentComponent },
  { path: "programsdata", component: ProgramdataComponent },
  // { path: 'qualitycheck', component: QualitycheckComponent,
  //   children: [
  //     { path: 'qualitydata', component: QualitydataComponent},
  //   ]
  // },
  { path: "qualitycheck", component: QualitycheckComponent },
  { path: "qualitydata", component: QualitydataComponent },
  {
    path: "dashboard", component: AdminDashboardComponent, children: [{ path: 'keyUser', loadChildren: () => import('./Modules/dictionary/dictionary.module').then(m => m.DictionaryModule) },
    { path: 'anotate', loadChildren: () => import('./Modules/annotation/annotation.module').then(m => m.AnnotationModule) },
    { path: 'anotateddoc', loadChildren: () => import('./Modules/annotateddoclist/annotateddoc.module').then(m => m.AnnotatedDocumentsModule) }
    ], canActivate: [AuthguardGuard]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
