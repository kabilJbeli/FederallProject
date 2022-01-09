import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Group } from '../models/group';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  private currentStudent: any;
  public groups: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    private _Activatedroute: ActivatedRoute,
    public dialog: MatDialog
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
      group: [null, [Validators.required]],
    });
    const id: number = parseInt(
      this._Activatedroute.snapshot.paramMap.get('id') || '0'
    );

    this.service.getAllGroup().subscribe((response: Group[]) => {
      this.groups = response;
    });

    this.service.getStudent(id).subscribe((result: Student) => {
      this.currentStudent = result;
      this.formGroup.patchValue({
        name: result.name,
        lastname: result.lastname,
        cin: result.cin,
        birthdate: result.birthdate,
        email: result.email,
        group: result.group
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

  onSubmit(student: Student) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Student', action: 'update' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.spinner = true;
        this.service
          .updateStudent(this.currentStudent.student_ID, student)
          .subscribe(
            (res) => {
              this.route.navigate(['/students-list']);
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

  cancel(event: any): void {
    this.route.navigate(['/students-list']);
  }
}
