import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { ClassRoom } from '../models/classRoom';

@Component({
  selector: 'app-class-room-list',
  templateUrl: './class-room-list.component.html',
  styleUrls: ['./class-room-list.component.scss'],
})
export class ClassRoomListComponent implements OnInit {
  public classRooms: ClassRoom[] = [];
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
    this.service.getAllClassRoom().subscribe((result: ClassRoom[]) => {
      this.spinner = false;
      this.classRooms = result;
    });
  }
  removeClassRoom(id: number) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Class Room', action: 'delete' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.removeClassRoom(id).subscribe(
          (result) => {
            this.getAll();
          },
          (error) => {}
        );
      }
    });
  }
  addNew(){
    this.route.navigate(['/add-class-room']);
  }
  updateClassRoom(id: number) {
    this.route.navigate([`/update-class-room/${id}`]);
  }

  goToSchedule(id: number) {
    this.route.navigate([`/schedule/classroom/${id}`]);
  }
}
