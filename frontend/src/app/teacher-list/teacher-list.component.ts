import { Component, OnInit } from '@angular/core';
import {Teacher} from "../models/teacher";
import {ApplicationService} from "../services/application.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
public Teachers:Teacher[]=[];
  constructor(private service:ApplicationService,private route:Router) { }

  ngOnInit(): void {

 this.getAll();
  }

  getAll():void{
    this.service.getAllTeacher().subscribe((result:Teacher[])=>{
      this.Teachers =result;
    })
  }
  removeTeacher(id:number){
    this.service.removeTeacher(id).subscribe(result=>{
      this.getAll();
    },error => {

    })
  }


  updateTeacher(id:number){

    this.route.navigate([`/update-teacher/${id}`])
  }
}
