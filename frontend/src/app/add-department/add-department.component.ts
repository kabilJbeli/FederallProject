import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Teacher } from '../models/teacher';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  public teachers: Teacher[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router
  ) {
    this.formGroup = this.formBuilder.group({
      departementname: [null, Validators.required],
      teacher: [null, [Validators.required]],
    });
    this.service.getAllTeacher().subscribe((response: Teacher[]) => {
      this.teachers = response;
    });
  }

  ngOnInit(): void {
  }
  get f() {
    return this.formGroup.controls;
  }

  onSubmit(departement: Department) {
    this.spinner = true;
    this.service.addDepartement(departement).subscribe(
      (res) => {
        this.route.navigate(['/department-list']);
        this.spinner = false;
      },
      (error) => {
        this.spinner = true;
      }
    );
  }

}
