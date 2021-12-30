import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import { Observable } from 'rxjs';
import { Group } from '../models/group';
import { Major } from '../models/Major';
import { Student } from '../models/student';
import { ClassRoom } from '../models/classRoom';
import { Subject } from '../models/subject';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getAllTeacher(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('api/teacher/all');
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>('api/teacher/add', teacher);
  }
  removeTeacher(id: number): Observable<Teacher> {
    return this.http.delete<Teacher>(`api/teacher/delete/${id}`);
  }
  getTeacher(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`api/teacher/${id}`);
  }
  updateTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`api/teacher/update/${id}`, teacher);
  }

  getAllGroup(): Observable<Group[]> {
    return this.http.get<Group[]>('api/groups/findall');
  }

  addGroup(group: Group): Observable<Group> {
    return this.http.post<Group>('api/groups/create', group);
  }
  removeGroup(id: number): Observable<Group> {
    return this.http.delete<Group>(`api/groups/delete/${id}`);
  }
  getGroup(id: number): Observable<Group> {
    return this.http.get<Group>(`api/groups/find/${id}`);
  }
  updateGroup(group: Group): Observable<Group> {
    return this.http.put<Group>(`api/groups/update`, group);
  }
  getAllMajor(): Observable<Major[]> {
    return this.http.get<Major[]>(`api/major/all`);
  }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('api/student/all');
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('api/student/add', student);
  }
  removeStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`api/student/delete/${id}`);
  }
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`api/student/${id}`);
  }
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`api/student/update/${id}`, student);
  }

  getAllClassRoom(): Observable<ClassRoom[]> {
    return this.http.get<ClassRoom[]>('api/classroom/all');
  }
  addClassRoom(classRoom: ClassRoom): Observable<ClassRoom> {
    return this.http.post<ClassRoom>('api/classroom/add', classRoom);
  }
  removeClassRoom(id: number): Observable<ClassRoom> {
    return this.http.delete<ClassRoom>(`api/classroom/delete/${id}`);
  }
  getClassRoom(id: number): Observable<ClassRoom> {
    return this.http.get<ClassRoom>(`api/classroom/${id}`);
  }
  updateClassRoom(id: number, classRoom: ClassRoom): Observable<ClassRoom> {
    return this.http.put<ClassRoom>(`api/classroom/update/${id}`, classRoom);
  }
  getAllSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>('api/subject/all');
  }

  addSubject(subject: Subject): Observable<any> {
    return this.http.post('api/subject/add', subject);
  }
  removeSubject(id: number): Observable<any> {
    return this.http.delete(`api/subject/delete/${id}`);
  }
  getSubject(id: number): Observable<Subject> {
    return this.http.get<Subject>(`api/subject/${id}`);
  }
  updateSubject(id: number, subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(`api/subject/update/${id}`, subject);
  }

  createUser(user: User): Observable<any> {
 return this.http.post(`api/keycloak/user?username=${user.email}&email=
 ${user.email}&password=${user.password}&firstname=${user.firstName}&lastname=${user.lastName}&ismanager=${user.isManager}`,{});
  }
  removeUser(user: User): Observable<any> {
    return this.http.delete(`api/keycloak/user?username=${user.email}`);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`api/keycloak/users`);
  }
}
