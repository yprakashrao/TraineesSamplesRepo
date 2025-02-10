import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistformComponent } from './existform/existform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewformComponent } from './newform/newform.component';
import { ShowformComponent } from './showform/showform.component';


const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  {path: "Home", component: HomepageComponent},
  {path: "New", component: NewformComponent},
  {path: "Existing", component:ExistformComponent},
  {path:"Show",component:ShowformComponent},
  {path:"Edit/:id", component: NewformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
