import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Subject } from '../models/subject';
import { Group } from '../models/group';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
})
export class AddSubjectComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  public groups: Group[] = [];
  public teachers: Teacher[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router
  ) {

    this.formGroup = this.formBuilder.group({
      subject_NAME: [null, Validators.required],
      credit: [null, [Validators.required]],
      course_LOAD: [null, [Validators.required]],
      group: [null, [Validators.required]],
      teacher: [null, [Validators.required]]
    });

    this.service.getAllGroup().subscribe((response: Group[]) => {
      this.groups = response;
    });
    
    this.service.getAllTeacher().subscribe((response: Teacher[]) => {
      this.teachers = response;
    });
  }

  ngOnInit(): void { }

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(subject: Subject) {
    this.spinner = true;
    this.service.addSubject(subject).subscribe(
      (res) => {
        this.route.navigate(['/subjects-list']);
        this.spinner = false;
      },
      (error) => {
        this.spinner = true;
      }
    );
  }
}
