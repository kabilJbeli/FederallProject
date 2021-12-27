import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from './shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { RoleGuardService } from './role-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { MaterialModule } from './shared-module/material.module';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { ActionModalComponent } from './action-modal/action-modal.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { UpdateGroupComponent } from './update-group/update-group.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HighchartsChartModule } from 'highcharts-angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from './services/event.service';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
    SignInComponent,
    AddTeacherComponent,
    UpdateTeacherComponent,
    ActionModalComponent,
    AddGroupComponent,
    GroupListComponent,
    UpdateGroupComponent,
    SchedulerComponent,
    AddStudentComponent,
    StudentListComponent,
    UpdateStudentComponent,
    UpdateSubjectComponent,
    SubjectListComponent,
    AddSubjectComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AccordionModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    HighchartsChartModule,

    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    AuthGuardService,
    RoleGuardService,
    EventService,
    AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
