import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from 'angular-bootstrap-md';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FooterComponent } from './footer/footer.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DialogComponent } from './dialog/dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { LogoutGuard } from './guards/logout.guard';
import { LoginComponent} from './login/login.component'



const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'app-home',component:HomeComponent},
  { path: 'app-navbar',component:NavbarComponent},
  { path: 'register-form', component: RegisterFormComponent },  
  { path: 'app-footer',component:FooterComponent},
  { path: 'userlist',component:UserlistComponent,canActivate:[LogoutGuard]},
  { path: 'app-dialog',component:DialogComponent},
  { path: 'delete-dialog',component:DeleteDialogComponent},
  { path: 'app-login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
