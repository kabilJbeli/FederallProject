import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApplicationService} from "../services/application.service";
import {Router} from "@angular/router";
import {EventRequest} from "../models/EventRequest";
import {Subject} from "../models/subject";
import {Group} from "../models/group";

@Component({
  selector: 'app-generate-events',
  templateUrl: './generate-events.component.html',
  styleUrls: ['./generate-events.component.scss']
})
export class GenerateEventsComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  public subjects:Subject[]=[];
  public groups:Group[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router
  ) {
    this.formGroup = this.formBuilder.group({
       subjects:[null, [Validators.required]],
      groups:[null, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.service.getAllGroup().subscribe((response:Group[])=>{
      this.groups=response;
    });

    this.service.getAllSubject().subscribe((response:Subject[])=>{
        this.subjects=response;
      }
    );
  }

  onSubmit(eventRequest:EventRequest):void{
    this.spinner=true;
console.log(eventRequest);
this.service.generateAgenda(eventRequest).subscribe(result=>{
  this.spinner=false;
},err=>{
  this.spinner=true;
})
  }
}
