import { AddClientFormComponent } from './add-client-form/add-client-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { TermsComponent } from "./terms/terms.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import{ChangePasswordComponent} from "./change-password/change-password.component";
import { AgentHomeComponent } from './agent-home/agent-home.component';
import { AgentListComponentComponent } from './agent-list-component/agent-list-component.component';
import { AgentProfilComponent } from './agent-profil/agent-profil.component';
import { ListCourrierComponent } from './list-courrier/list-courrier.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'listcourrier', component: ListCourrierComponent },
  { path: 'terms', component: TermsComponent },
  {path:"admin/addClient",component:AddClientFormComponent},
  { path: 'contact-us', component: ContactUsComponent },
  {path:'admin/changePassword', component: ChangePasswordComponent},
  {path:'home/agent',component: AgentHomeComponent},
  {path:'clientList',component :AgentListComponentComponent},
  {path:'profil',component :AgentProfilComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
