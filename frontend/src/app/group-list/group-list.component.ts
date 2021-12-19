import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Group } from '../models/group';
import { ActionModalComponent } from '../action-modal/action-modal.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {
  public groups: Group[] = [];
  public spinner: boolean = false;
  constructor(
    private service: ApplicationService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.spinner = true;
    this.service.getAllGroup().subscribe((result: Group[]) => {
      this.spinner = false;
      this.groups = result;
    });
  }

  removeGroup(id: number) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '400px',
      data: { name: 'Group' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.removeGroup(id).subscribe(
          (result) => {
            this.getAll();
          },
          (error) => {}
        );
      }
    });
  }

  updateGroup(id: number) {
    this.route.navigate([`/update-group/${id}`]);
  }
}
