import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../models/group';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Major } from '../models/Major';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss'],
})
export class UpdateGroupComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  private currentGroup: any;
  public Majors: Major[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    private _Activatedroute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.formGroup = this.formBuilder.group({
      groupname: [null, Validators.required],
      groupmajore: [null, [Validators.required]],
      isEveningClass:[false, [Validators.required]],
    });
    this.service.getAllMajor().subscribe((response: Major[]) => {
      this.Majors = response;
    });
    const id: number = parseInt(
      this._Activatedroute.snapshot.paramMap.get('id') || '0'
    );

    this.service.getGroup(id).subscribe((result: any) => {
      this.currentGroup = result;
      this.formGroup.patchValue({
        groupname: result.groupname,
        groupmajore: result.groupmajore,
        isEveningClass:result.isEveningClass
      });
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(group: Group) {
    group.groupId = this.currentGroup.groupId;
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Group', action: 'update' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.spinner = true;
        this.service.updateGroup(group).subscribe(
          (res) => {
            this.route.navigate(['/group-list']);
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
    this.route.navigate(['/group-list']);
  }
}
