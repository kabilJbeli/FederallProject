import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {ApplicationService} from "../services/application.service";
import {Router} from "@angular/router";
import {Teacher} from "../models/teacher";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner:boolean=false;
  constructor(private formBuilder: FormBuilder,private service:ApplicationService, private route:Router) {
    this.formGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'lastname': [null, [Validators.required]],
      'cin': [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      'birthdate': [null, []],
    });
  }

  ngOnInit(): void {
  }



  get f() {
    return this.formGroup.controls
  }


  checkInUseEmail(control:any) {
    // mimic http database access
    let db:any[] = [];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }



  onSubmit(teacher:Teacher) {
    this.spinner=true;
    this.service.addTeacher(teacher).subscribe(res=>{
      this.route.navigate(['/teachers-list']);
      this.spinner=false;
    },error => {
      this.spinner=true;
    })
  }
}
