import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import { Observable } from 'rxjs';
import { Group } from '../models/group';
import { Major } from '../models/Major';
import { Student } from '../models/student';
import { Subject } from '../models/subject';


@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getAllTeacher(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('api/teacher/all');
  }

  addTeacher(teacher: Teacher): Observable<any> {
    return this.http.post('api/teacher/add', teacher);
  }
  removeTeacher(id: number): Observable<any> {
    return this.http.delete(`api/teacher/delete/${id}`);
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

  addGroup(group: Group): Observable<any> {
    return this.http.post('api/groups/create', group);
  }
  removeGroup(id: number): Observable<any> {
    return this.http.delete(`api/groups/delete/${id}`);
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

  addStudent(student: Student): Observable<any> {
    return this.http.post('api/student/add', student);
  }
  removeStudent(id: number): Observable<any> {
    return this.http.delete(`api/student/delete/${id}`);
  }
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`api/student/${id}`);
  }
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`api/student/update/${id}`, student);
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

}
