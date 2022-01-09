import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Group } from '../models/group';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.scss'],
})
export class UpdateSubjectComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  private currentSubject: any;
  public teachers: any[] = [];
  public groups: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    private _Activatedroute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.formGroup = this.formBuilder.group({
      subject_NAME: [null, Validators.required],
      credit: [null, [Validators.required]],
      course_LOAD: [null, [Validators.required]],
      group: [null, [Validators.required]],
      teacher: [null, [Validators.required]],
    });
    const id: number = parseInt(
      this._Activatedroute.snapshot.paramMap.get('id') || '0'
    );

    this.service.getSubject(id).subscribe((result: Subject) => {
      this.currentSubject = result;
      this.formGroup.patchValue({
        subject_NAME: result.subject_NAME,
        credit: result.credit,
        course_LOAD: result.course_LOAD
      });
    });
    this.service.getAllTeacher().subscribe((result:Teacher[])=>{
      this.teachers=result;
    });
    this.service.getAllGroup().subscribe((result:Group[])=>{
      this.groups=result;
    });
  }
  checkIfSelected(teacher:Teacher):Boolean{
    return this.teachers.includes(teacher);
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

  onSubmit(subject: Subject) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Subject', action: 'update' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.spinner = true;
        this.service
          .updateSubject(this.currentSubject.subject_ID, subject)
          .subscribe(
            (res) => {
              this.route.navigate(['/subjects-list']);
              this.spinner = false;
            },
            (error) => {
              this.spinner = true;
            }
          );
      }
    });
  }

  setSelectedGroup(groupId:any){
    const group:Group =  this.groups.find(group=>group.groupId===parseInt(groupId.value));
    this.formGroup.patchValue({
      group:group
    })
  }

  setSelectedTeacher(teacher_ID:any){
    const teacher:Teacher =  this.teachers.find(teacher=>teacher.teacher_ID===parseInt(teacher_ID.value));
    this.formGroup.patchValue({
      teacher:teacher
    })
  }

  cancel(event: any): void {
    this.route.navigate(['/subjects-list']);
  }
}
