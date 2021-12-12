import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[];

  constructor(private route: Router) {
    this.items = [
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
            command: (event: any) => {},
          },
          { label: 'Add Student', command: (event: any) => {} },
        ],
      },
      {
        label: 'Subjects',
        items: [
          {
            label: 'Subjects List',
            command: (event: any) => {},
          },
          { label: 'Add Subject', command: (event: any) => {} },
        ],
      },
      {
        label: 'Groups',
        items: [
          {
            label: 'Groups List',
            command: (event: any) => {},
          },
          { label: 'Add Group', command: (event: any) => {} },
        ],
      },
      {
        label: 'Agenda',
        items: [
          {
            label: 'Consult  Agendas',
            command: (event: any) => {},
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
            command: (event: any) => {},
          },
          { label: 'Add Classroom', command: (event: any) => {} },
        ],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: (event: any) => {
          this.route.navigate(['/sign-in']);
          localStorage.setItem('signedIn', 'false');
        },
      },
    ];
  }

  ngOnInit(): void {}
}
