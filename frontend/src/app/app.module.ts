import {APP_INITIALIZER, NgModule} from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
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
import { ClassRoomListComponent } from './class-room-list/class-room-list.component';
import { AddClassRoomComponent } from './add-class-room/add-class-room.component';
import { UpdateClassRoomComponent } from './update-class-room/update-class-room.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { initializer } from './app-init';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { UpdateProfileInformationComponent } from './update-profile-information/update-profile-information.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { GenerateEventsComponent } from './generate-events/generate-events.component';
import {MatNativeDatetimeModule} from "@mat-datetimepicker/core";

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
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
    ClassRoomListComponent,
    AddClassRoomComponent,
    UpdateClassRoomComponent,
    UpdateSubjectComponent,
    SubjectListComponent,
    AddSubjectComponent,
    AddUserComponent,
    UsersListComponent,
    ErrorMessageComponent,
    UpdateProfileInformationComponent,
    AddDepartmentComponent,
    DepartmentListComponent,
    UpdateDepartmentComponent,
    GenerateEventsComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AccordionModule,
    KeycloakAngularModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    MaterialModule,
    MatNativeDatetimeModule,
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
    EventService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
