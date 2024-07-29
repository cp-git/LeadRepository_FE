import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { UserdetailsComponent } from './userdetails/components/userdetails/userdetails.component';
import { LeadDetailsComponent } from './leaddetails/components/lead-details/lead-details.component';
import { AddLeadDetailsComponent } from './leaddetails/components/add-lead-details/add-lead-details.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'leaddetails', component: LeadDetailsComponent },
  { path: 'add-lead', component: AddLeadDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
