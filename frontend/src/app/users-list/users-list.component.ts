import { Component, OnInit } from '@angular/core';
import {Teacher} from "../models/teacher";
import {ApplicationService} from "../services/application.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ActionModalComponent} from "../action-modal/action-modal.component";
import {User} from "../models/user";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public Users: User[] = [];
  public spinner: boolean = false;
  public userInfo: any;
  constructor(
    private service: ApplicationService,
    private route: Router,
    public dialog: MatDialog,
    private keycloakService:KeycloakService
  ) {
    this.userInfo=this.keycloakService.getKeycloakInstance().profile;
  }

  ngOnInit(): void {
    this.getAll();
  }
  addNew(){
    this.route.navigate(['/add-user']);
  }
  getAll(): void {
    this.spinner = true;
    this.service.getUsers().subscribe((result: User[]) => {
      this.spinner = false;this.Users = result.filter((user:User)=>user.username !=='manager' && user.username !=='helpdesk');
    });
  }
  removeUser(user: User) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'User', action: 'delete' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.removeUser(user).subscribe(
          (result) => {
            this.getAll();
          },
          (error) => {}
        );
      }
    });
  }

}
