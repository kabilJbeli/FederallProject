import {DateInput} from "@fullcalendar/angular";

export interface Event {
  allDay: boolean,
  id: string,
  description: string,
  title:string,
  end: DateInput,
  start: DateInput
}
