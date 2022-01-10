import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Teacher } from '../models/teacher';
import { Group } from '../models/group';
import { Observable, Subscription } from 'rxjs';
import { Major } from '../models/Major';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
})
export class AddGroupComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  public Majors: Major[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router
  ) {
    this.formGroup = this.formBuilder.group({
      groupname: [null, Validators.required],
      groupmajore: [null, [Validators.required]],
      isEveningClass:[false, [Validators.required]],
    });
    this.service.getAllMajor().subscribe((response: Major[]) => {
      this.Majors = response;
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(group: Group) {
    this.spinner = true;
    this.service.addGroup(group).subscribe(
      (res) => {
        this.route.navigate(['/group-list']);
        this.spinner = false;
      },
      (error) => {
        this.spinner = true;
      }
    );
  }
}
