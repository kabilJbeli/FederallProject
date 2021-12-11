import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import {NgxsModule} from "@ngxs/store";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AccordionModule} from "primeng/accordion";
import {SharedModule} from "./shared-module/shared-module.module";
import {ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HttpClientModule} from "@angular/common/http";
import {RoleGuardService} from "./role-guard.service";
import {AuthGuardService} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import {MaterialModule} from "./material.module";
import {UpdateTeacherComponent} from "./update-teacher/update-teacher.component";




@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
    SignInComponent,
    AddTeacherComponent,
    UpdateTeacherComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [AuthGuardService,RoleGuardService,AuthService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
