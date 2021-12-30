import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import {KeycloakService} from "keycloak-angular";
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
        icon: 'pi pi-fw pi-home',
        command: (event: any) => {
          this.route.navigate(['/dashboard']);
        },
      },
      {
        label: 'Teachers',
        items: [
          {
            label: 'Teachers List',
            command: (event: any) => {
              this.route.navigate(['/teachers-list']);
            },
          },
          {
            label: 'Add Teacher',
            command: (event: any) => {
              this.route.navigate(['/add-teacher']);
            },
          },
        ],
      },
      {
        label: 'Students',
        items: [
          {
            label: 'Students List',
            command: (event: any) => {
              this.route.navigate(['/students-list']);
            },
          },
          {
            label: 'Add Student',
            command: (event: any) => {
              this.route.navigate(['/add-student']);
            },
          },
        ],
      },
      {
        label: 'Subjects',
        items: [
          {
            label: 'Subjects List',
            command: (event: any) => {
              this.route.navigate(['/subjects-list']);
            },
          },
          {
            label: 'Add Subject',
            command: (event: any) => {
              this.route.navigate(['/add-subject']);
            },
          },
        ],
      },
      {
        label: 'Groups',
        items: [
          {
            label: 'Groups List',
            command: (event: any) => {
              this.route.navigate(['/group-list']);
            },
          },
          {
            label: 'Add Group',
            command: (event: any) => {
              this.route.navigate(['/add-group']);
            },
          },
        ],
      },
      {
        label: 'Agenda',
        items: [
          {
            label: 'Consult  Agendas',
            command: (event: any) => {
              this.route.navigate(['/schedule']);
            },
          },
        ],
      },
      {
        label: 'Departments',
        items: [
          {
            label: 'Departments List',
            command: (event: any) => {},
          },
          { label: 'Add Department', command: (event: any) => {} },
        ],
      },
      {
        label: 'Classrooms',
        items: [
          {
            label: 'Classrooms List',
            command: (event: any) => {
              this.route.navigate(['/class-room-list']);
            },
          },
          {
            label: 'Add Classroom',
            command: (event: any) => {
              this.route.navigate(['/add-class-room']);
            },
          },
        ],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: (event: any) => {
          this.keycloakService.logout();
        },
      },
    ];
  }

  ngOnInit(): void {}
}
