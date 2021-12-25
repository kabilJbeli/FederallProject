import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import { Observable } from 'rxjs';
import { Group } from '../models/group';

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
}
