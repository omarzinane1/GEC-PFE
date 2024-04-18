import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/connexion/login/login.component';
import { RegisterComponent } from './components/connexion/register/register.component';
import { SidebarComponent } from './components/hero/sidebar/sidebar.component';
import { DashboardComponent } from './components/hero/dashboard/dashboard.component';

const routes: Routes =
[

  { path: '', component: LoginComponent }, // Default route
  { path: 'register', component: RegisterComponent },
  { path: 'sidebar', component: SidebarComponent, children: [
    { path: '', component: DashboardComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
