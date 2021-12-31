import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApplicationService} from "../services/application.service";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-update-profile-information',
  templateUrl: './update-profile-information.component.html',
  styleUrls: ['./update-profile-information.component.scss']
})
export class UpdateProfileInformationComponent implements OnInit {

  public formGroup: FormGroup;
  public spinner: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    private keycloakService:KeycloakService
  ) {
    const userInfo:any=this.keycloakService.getKeycloakInstance().profile;
    this.formGroup = this.formBuilder.group({
      firstName: [userInfo.firstName, Validators.required],
      lastName: [userInfo.lastName, [Validators.required]],
      password: ['******', []],
      email: [userInfo.username, []],
    });
  }


  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(user: User) {
    this.spinner = true;
    this.service.updateUser(user).subscribe(
      (res) => {
        this.route.navigate(['/dashboard']);
        this.spinner = false;
      },
      (error) => {
        this.spinner = true;
      }
    );
  }
}
