import {TeacherAvailability} from "./teacher-availability";

export interface Teacher {
  teacher_id: number;
  cin: number;
  name: String;
  lastname: String;
  birthdate: Date;
  email: String;
  isOpenForEveningClasses:Boolean;
  availability:TeacherAvailability[];
}
