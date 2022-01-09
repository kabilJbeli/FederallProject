import { Group } from "./group";
import { Teacher } from "./teacher";

export interface Subject {
    subject_id: number;
    subject_NAME: String;
    credit: number;
    course_LOAD: number;
    group: Group[];
    teacher: Teacher[];
  }
  