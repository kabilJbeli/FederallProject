import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Teacher} from "../models/teacher";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService{

  constructor(private http: HttpClient) { }

  getAllTeacher() :Observable<Teacher[]> {
    return this.http.get<Teacher[]>('api/teacher/all');
  }

  addTeacher(teacher:Teacher) :Observable<any> {
    return this.http.post('api/teacher/add',teacher);
  }
  removeTeacher(id:number) :Observable<any> {
    return this.http.delete(`api/teacher/delete/${id}`);
  }
  getTeacher(id:number) :Observable<Teacher> {
    return this.http.get<Teacher>(`api/teacher/${id}`);
  }
  updateTeacher(id:number,teacher:Teacher) :Observable<Teacher> {
    return this.http.put<Teacher>(`api/teacher/update/${id}`,teacher);
  }
}
