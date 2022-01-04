import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Teacher } from '../models/teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';
@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {

  public formGroup: FormGroup;
  public spinner: boolean = false;
  private currentdepartement: any;
  public teachers: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    private _Activatedroute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.formGroup = this.formBuilder.group({
      departementname: [null, Validators.required],
      teacher: [null, [Validators.required]],
    });
    this.service.getAllTeacher().subscribe((response: Teacher[]) => {
      this.teachers = response;
    });
    const id: number = parseInt(
      this._Activatedroute.snapshot.paramMap.get('id') || '0'
    );

    this.service.getDepartement(id).subscribe((result: any) => {
      this.currentdepartement = result;
      this.formGroup.patchValue({
        departementname: result.departementname,
        teacher: result.teacher,
      });
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(department: Department) {
    department.departementid = this.currentdepartement.departementid;
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Department', action: 'update' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.spinner = true;
        this.service.updateDepatement(department).subscribe(
          (res) => {
            this.route.navigate(['/department-list']);
            this.spinner = false;
          },
          (error) => {
            this.spinner = true;
          }
        );
      }
    });
  }
  cancel(event: any): void {
    this.route.navigate(['/department-list']);
  }
}

