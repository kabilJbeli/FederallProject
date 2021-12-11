import { Routes, CanActivate } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './auth-guard.service';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {TeacherListComponent} from "./teacher-list/teacher-list.component";
import {AddTeacherComponent} from "./add-teacher/add-teacher.component";
import {UpdateTeacherComponent} from "./update-teacher/update-teacher.component";
export const ROUTES: Routes = [
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'teachers-list',
    component: TeacherListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-teacher/:id',
    component: UpdateTeacherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/sign-in' }
];
