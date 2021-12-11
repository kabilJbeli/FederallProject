import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'federal-project';
  constructor(private primengConfig: PrimeNGConfig, public route:Router) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
    if(!localStorage.getItem('signedIn')){
      localStorage.setItem('signedIn','false');
    }
  }
}
