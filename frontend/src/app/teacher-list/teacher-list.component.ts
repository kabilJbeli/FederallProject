import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActionModalComponent } from '../action-modal/action-modal.component';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
})
export class TeacherListComponent implements OnInit {
  public Teachers: Teacher[] = [];
  public spinner: boolean = false;
  constructor(
    private service: ApplicationService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
 //   this.service.createUser({email:"k@gmail.com",username:'kabil',password:'test'}).subscribe();
  }

  getAll(): void {
    this.spinner = true;
    this.service.getAllTeacher().subscribe((result: Teacher[]) => {
      this.spinner = false;
      this.Teachers = result;
    });
  }
  removeTeacher(id: number) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Teacher', action: 'delete' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.removeTeacher(id).subscribe(
          (result) => {
            this.getAll();
          },
          (error) => {}
        );
      }
    });
  }

  updateTeacher(id: number) {
    this.route.navigate([`/update-teacher/${id}`]);
  }

  goToSchedule(id: number) {
    this.route.navigate([`/schedule/teacher/${id}`]);
  }
}
