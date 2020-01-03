import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import { AdminComponent } from './client/modules/admin/admin.component';
import { CompanyComponent } from './client/modules/company/company.component';
import { CollegeComponent } from './client/modules/college/college.component';
import { StudentComponent } from './client/modules/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CompanyComponent,
    CollegeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
