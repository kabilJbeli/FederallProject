import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActionModalComponent } from '../action-modal/action-modal.component';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public departements: Department[] = [];
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
    this.service.getAllDepartement().subscribe((result: Department[]) => {
      this.spinner = false;
      this.departements = result;
    });
  }

  removeDepartement(id: number) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Department', action: 'delete' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.removeDepartement(id).subscribe(
          (result) => {
            this.getAll();
          },
          (error) => {}
        );
      }
    });
  }
  addNew(){
    this.route.navigate(['/add-department']);
  }
  updateDepartment(id: number) {
    this.route.navigate([`/update-department/${id}`]);
  }

}
