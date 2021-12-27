import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Teacher } from '../models/teacher';
import { ClassRoom } from '../models/classRoom';

@Component({
  selector: 'app-add-class-room',
  templateUrl: './add-class-room.component.html',
  styleUrls: ['./add-class-room.component.scss'],
})
export class AddClassRoomComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router
  ) {
    this.formGroup = this.formBuilder.group({
      classroom_number: [null, Validators.required],
      stage: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(classRoom: ClassRoom) {
    this.spinner = true;
    this.service.addClassRoom(classRoom).subscribe(
      (res) => {
        this.route.navigate(['/class-room-list']);
        this.spinner = false;
      },
      (error) => {
        this.spinner = true;
      }
    );
  }
}
