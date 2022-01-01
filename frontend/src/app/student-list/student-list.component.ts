import { Student } from '../models/student';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public Students: Student[] = [];
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
    this.service.getAllStudent().subscribe((result: Student[]) => {
      this.spinner = false;
      this.Students = result;
    });
  }
  removeStudent(id: number) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Student', action: 'delete' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.removeStudent(id).subscribe(
          (result) => {
            this.getAll();
          },
          (error) => {}
        );
      }
    });
  }
  addNew(){
    this.route.navigate(['/add-student']);
  }
  updateStudent(id: number) {
    this.route.navigate([`/update-student/${id}`]);
  }

  goToSchedule(id: number) {
    this.route.navigate([`/schedule/student/${id}`]);
  }
}
