import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../models/group';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss'],
})
export class UpdateGroupComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  private currentGroup: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    private _Activatedroute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      groupname: [null, Validators.required],
      groupmajore: [null, [Validators.required]],
    });

    const id: number = parseInt(
      this._Activatedroute.snapshot.paramMap.get('id') || '0'
    );

    this.service.getGroup(id).subscribe((result: any) => {
      this.currentGroup = result;
      this.formGroup.patchValue({
        groupname: result.groupname,
        groupmajore: result.groupmajore,
      });
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(group: Group) {
    this.spinner = true;
    group.groupId = this.currentGroup.groupId;

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
}
