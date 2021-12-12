import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss'],
})
export class UpdateTeacherComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  private currentTeacher: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    private _Activatedroute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, [Validators.required]],
      cin: [
        null,
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
      birthdate: [null, [Validators.required]],
    });
    const id: number = parseInt(
      this._Activatedroute.snapshot.paramMap.get('id') || '0'
    );

    this.service.getTeacher(id).subscribe((result: any) => {
      this.currentTeacher = result;
      this.formGroup.patchValue({
        name: result.name,
        lastname: result.lastname,
        cin: result.cin,
        birthdate: result.birthdate,
      });
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  checkInUseEmail(control: any) {
    // mimic http database access
    let db: any[] = [];
    return new Observable((observer) => {
      setTimeout(() => {
        let result =
          db.indexOf(control.value) !== -1 ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  onSubmit(teacher: any) {
    this.spinner = true;
    this.service
      .updateTeacher(this.currentTeacher.teacher_ID, teacher)
      .subscribe(
        (res) => {
          this.route.navigate(['/teachers-list']);
          this.spinner = false;
        },
        (error) => {
          this.spinner = true;
        }
      );
  }
}
