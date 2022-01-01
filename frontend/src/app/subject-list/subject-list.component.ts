import { Subject } from '../models/subject';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  public Subjects: Subject[] = [];
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
    this.service.getAllSubject().subscribe((result: Subject[]) => {
      this.spinner = false;
      this.Subjects = result;
    });
  }
  removeSubject(id: number) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Subject', action: 'delete' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.removeSubject(id).subscribe(
          (result) => {
            this.getAll();
          },
          (error) => {}
        );
      }
    });
  }
  addNew(){
    this.route.navigate(['/add-subject']);
  }
  updateSubject(id: number) {
    this.route.navigate([`/update-subject/${id}`]);
  }

  goToSchedule(id: number) {
    this.route.navigate([`/schedule/subject/${id}`]);
  }
}
