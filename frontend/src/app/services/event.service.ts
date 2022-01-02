import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Event} from "../models/event";

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>('assets/mockdata/calendarevents.json');
  }
}
