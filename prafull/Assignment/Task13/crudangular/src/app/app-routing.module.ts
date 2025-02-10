import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {path: 'users', component: UserlistComponent},
  {path: 'create', component: CreateComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
