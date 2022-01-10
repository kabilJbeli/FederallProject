import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Teacher } from '../models/teacher';
import {MatDatepicker, MatDatepickerInputEvent} from "@angular/material/datepicker";
import {MatDatetimepickerInputEvent} from "@mat-datetimepicker/core";
import {TeacherAvailability} from "../models/teacher-availability";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class AddTeacherComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  public CLOSE_ON_SELECTED = false;
  public init = new Date();
  public resetModel = new Date(0);

  public model:TeacherAvailability[] = [ ];
  @ViewChild('picker2', { static: true }) _picker: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router
  ) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, [Validators.required]],
      cin: [
        null,
        [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.max(99999999),],
      ],
      birthdate: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      isOpenForEveningClasses: [false, [Validators.required]],
      availability:[null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(teacher: Teacher) {
    this.spinner = true;
    this.service.addTeacher(teacher).subscribe(
      (res) => {
        this.route.navigate(['/teachers-list']);
        this.spinner = false;
      },
      (error) => {
        this.spinner = true;
      }
    );
  }




  public dateChanged(event: MatDatetimepickerInputEvent<Date>): void {
    if (event.value) {
      const date = event.value;

     let  teacherAvailability:TeacherAvailability={
       timeAvailability:event.value,
       isNotTaken:true
     };

      const index = this._findDate(teacherAvailability);
      if (index === -1) {
        this.model.push(teacherAvailability);

        this.formGroup.patchValue({
          availability: this.model
        })
      } else {
        this.model.splice(index, 1)
        this.formGroup.patchValue({
          availability: this.model
        })
      }
      this.resetModel = new Date(0);
      if (!this.CLOSE_ON_SELECTED) {

        const closeFn = this._picker.close;
        this._picker.close = () => { };
        this._picker['_popupComponentRef'].instance._calendar.monthView._createWeekCells()
        setTimeout(() => {
          this._picker.close = closeFn;
        });
      }
    }
  }

  public remove(date: TeacherAvailability): void {
    const index = this._findDate(date);
    this.model.splice(index, 1)
    this.formGroup.patchValue({
      availability: this.model
    })
  }

  private _findDate(date: TeacherAvailability): number {
    return this.model.map((m) => +m.timeAvailability).indexOf(+date);
  }
}
