import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { GroupListComponent } from './group-list/group-list.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { UpdateGroupComponent } from './update-group/update-group.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
export const ROUTES: Routes = [
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'teachers-list',
    component: TeacherListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'students-list',
    component: StudentListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-teacher/:id',
    component: UpdateTeacherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-student/:id',
    component: UpdateStudentComponent,
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
    path: 'schedule',
    component: SchedulerComponent,
    children: [{ path: ':type/:id', component: SchedulerComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: 'update-group/:id',
    component: UpdateGroupComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/sign-in' },
];
