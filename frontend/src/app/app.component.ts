import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'federal-project';
  constructor(
    private primengConfig: PrimeNGConfig,
    public route: Router,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    if (!localStorage.getItem('signedIn')) {
      localStorage.setItem('signedIn', 'false');
    }
  }
}
