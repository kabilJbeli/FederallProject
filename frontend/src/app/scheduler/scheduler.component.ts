import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../services/event.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent | undefined;

  events: any[] = [];

  options: CalendarOptions | undefined;

  header: any;

  constructor(private eventService: EventService) {
    let calendarApi = this.calendarComponent?.getApi();
  }

  ngOnInit() {
    this.eventService.getEvents().then((events: any) => {
      this.events = events;
      this.options = { ...this.options, ...{ events: events } };
    });

    this.options = {
      initialDate: new Date(),
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev',
        center: 'today',
        right: 'next',
      },
      aspectRatio: 1,
      handleWindowResize: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
    };
  }
}
