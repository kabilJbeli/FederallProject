import { Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { GroupListComponent } from './group-list/group-list.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { UpdateGroupComponent } from './update-group/update-group.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ClassRoomListComponent } from './class-room-list/class-room-list.component';
import { AddClassRoomComponent } from './add-class-room/add-class-room.component';
import { UpdateClassRoomComponent } from './update-class-room/update-class-room.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import {AuthGuard} from "./auth-guard";
import {AddUserComponent} from "./add-user/add-user.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {UpdateProfileInformationComponent} from "./update-profile-information/update-profile-information.component";
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import {GenerateEventsComponent} from "./generate-events/generate-events.component";

export const ROUTES: Routes = [
  {
    path: 'teachers-list',
    component: TeacherListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'class-room-list',
    component: ClassRoomListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'students-list',
    component: StudentListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'subjects-list',
    component: SubjectListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-class-room',
    component: AddClassRoomComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-teacher/:id',
    component: UpdateTeacherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-class-room/:id',
    component: UpdateClassRoomComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-student/:id',
    component: UpdateStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-subject/:id',
    component: UpdateSubjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'group-list',
    component: GroupListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-group',
    component: AddGroupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users-list',
    component: UsersListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['front-manager'] },
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['front-manager'] },
  },
  {
    path: 'schedule',
    component: SchedulerComponent,
    children: [{ path: ':type/:id', component: SchedulerComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: 'update-profile-information',
    component: UpdateProfileInformationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-group/:id',
    component: UpdateGroupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'department-list',
    component: DepartmentListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'add-department',
    component: AddDepartmentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'generate-calendar',
    component: GenerateEventsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-department/:id',
    component: UpdateDepartmentComponent,
    canActivate: [AuthGuard],
  },
  {path: '**', redirectTo: '/dashboard'}
];
