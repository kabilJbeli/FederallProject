import {Subject} from "./subject";
import {Group} from "./group";

export interface EventRequest{
  subjects:Subject[],
  groups:Group[]
}
