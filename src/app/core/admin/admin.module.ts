import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { NavbarComponent } from "src/app/components/navbar/navbar.component";
import { SidebarComponent } from "src/app/components/sidebar/sidebar.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { PatientsComponent } from "./patients/patients.component";


@NgModule({
  declarations: [
    DoctorsComponent,
    PatientsComponent
  ],
  imports: [CommonModule,AdminRoutingModule]
})
export class AdminModule {

}