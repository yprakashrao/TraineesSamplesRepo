import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ShowListComponent } from './show-list/show-list.component';
import { SignIncomponentComponent } from './sign-incomponent/sign-incomponent.component';

const routes: Routes = [

  {path:"Sign-Up",component:RegisterComponentComponent},
  {path: "Sign-In",component:SignIncomponentComponent},
  {path: "show-list",component:ShowListComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
