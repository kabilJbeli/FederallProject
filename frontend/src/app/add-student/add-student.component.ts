import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { Group } from '../models/group';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  public groups: Group[] = [];
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
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
      birthdate: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      group: [null, [Validators.required]]
    });
    this.service.getAllGroup().subscribe((response: Group[]) => {
      this.groups = response;
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(student: Student) {
    this.spinner = true;
    this.service.addStudent(student).subscribe(
      (res) => {
        this.route.navigate(['/students-list']);
        this.spinner = false;
      },
      (error) => {
        this.spinner = true;
      }
    );
  }
}
