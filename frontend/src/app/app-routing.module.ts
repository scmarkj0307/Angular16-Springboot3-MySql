import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './layouts/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [

  {path: 'header', component: HeaderComponent},
  {path: '', component: HomeComponent},
  {path: 'employee', component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
