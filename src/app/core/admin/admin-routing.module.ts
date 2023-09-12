import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from "./patients/patients.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { AdminLayoutComponent } from "../layout/adminLayout.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path: 'doctors', component: DoctorsComponent,
      },
      {
        path: 'patients', component: PatientsComponent,
      },


      {path:'', redirectTo:'dashboard', pathMatch:'full'}
    ]
  },
  
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AdminRoutingModule {}