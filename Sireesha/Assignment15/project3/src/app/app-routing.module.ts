import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShowListComponent } from './show-list/show-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'show', component: ShowListComponent },
  { path: 'dialog', component: DialogboxComponent },
  { path: 'delete', component: DeleteDialogComponent },
  { path: 'edit', component: EditDialogComponent },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
