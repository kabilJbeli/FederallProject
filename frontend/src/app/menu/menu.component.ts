import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import {KeycloakService} from "keycloak-angular";
import {User} from "../models/user";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[];

  constructor(private route: Router,private keycloakService: KeycloakService) {

    this.items = [
      {
        label: 'Departments',
        command: (event: any) => {},

      },

      {
        label: 'Classrooms',
        command: (event: any) => {
          this.route.navigate(['/class-room-list']);
        },
      },

      {
        label: 'Groups',
        command: (event: any) => {
          this.route.navigate(['/group-list']);
        },
      },

      {
        label: 'Subjects',
        command: (event: any) => {
          this.route.navigate(['/subjects-list']);
        },
      },
      {
        label: 'Teachers',
        command: (event: any) => {
          this.route.navigate(['/teachers-list']);
        },
      },
      {
        label: 'Students',
        command: (event: any) => {
          this.route.navigate(['/students-list']);
        },
      },
      {
        label: 'Agenda',
        command: (event: any) => {
          this.route.navigate(['/schedule']);
        },
      },

    ];
    if(keycloakService.getUserRoles(true).includes('front-manager')){
      this.items.push(
        {
          label: 'Users',
          command: (event: any) => {
            this.route.navigate(['/users-list']);
          },
        }
      )
    }
    const userInfo:any=this.keycloakService.getKeycloakInstance().profile;
    this.items.push(
      {
        label: userInfo.firstName+' '+userInfo.lastName,
        icon: 'pi pi-fw pi-user',
        styleClass:'pull-right d-right',
        items: [
          {
            label: 'Update Information',
            command: (event: any) => {
              this.route.navigate(['/update-profile-information']);
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
            command: (event: any) => {
              this.keycloakService.logout();
            },
          }

        ]
      }
    );
  }
goToDashboard(){
  this.route.navigate(['/dashboard']);

}
  ngOnInit(): void {
  }
}
