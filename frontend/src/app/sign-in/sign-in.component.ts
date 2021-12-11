import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;
  get f() { return this.loginForm.controls; }

  constructor(private route:Router) {
    if(localStorage.getItem('signedIn')=='true'){
      this.route.navigate(['/dashboard']);
    }
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      hasError: new FormControl(false,[]),
    });
  }


  ngOnInit() {

  }

  onSubmit() :void{
    this.submitted = true;
    if(this.f['password'].value==='iskander' && this.f['login'].value==='fuck'){
      localStorage.setItem('signedIn','true');
      this.route.navigate(['/dashboard'])
    }else{

      this.loginForm.patchValue({hasError:true})
    }


  }
}
