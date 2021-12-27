import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Subject } from '../models/subject';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
})
export class AddSubjectComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router
  ) {

    this.formGroup = this.formBuilder.group({

      subject_NAME: [null, Validators.required],
      credit: [null, [Validators.required]],
      course_LOAD: [null, [Validators.required]],
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
