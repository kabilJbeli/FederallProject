import { Group } from "./group";

export interface Student {
  student_id: number;
  cin: number;
  name: String;
  lastname: String;
  birthdate: Date;
  email: String;
  group: Group
}
