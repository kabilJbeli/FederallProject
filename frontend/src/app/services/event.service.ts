import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http
      .get('showcase/resources/data/calendarevents.json')
      .toPromise()
      .then((res: any) => <any[]>res.json().data)
      .then((data: any) => {
        return data;
      });
  }
}
