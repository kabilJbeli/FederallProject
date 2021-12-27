import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { ClassRoom } from '../models/classRoom';

@Component({
  selector: 'app-update-class-room',
  templateUrl: './update-class-room.component.html',
  styleUrls: ['./update-class-room.component.scss'],
})
export class UpdateClassRoomComponent implements OnInit {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  private currentClassRoom: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    private _Activatedroute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.formGroup = this.formBuilder.group({
      classroom_number: [null, Validators.required],
      stage: [null, [Validators.required]],
    });
    const id: number = parseInt(
      this._Activatedroute.snapshot.paramMap.get('id') || '0'
    );

    this.service.getClassRoom(id).subscribe((result: ClassRoom) => {
      this.currentClassRoom = result;
      this.formGroup.patchValue({
        classroom_number: result.classroom_number,
        stage: result.stage,
      });
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formGroup.controls;
  }

  checkInUseEmail(control: any) {
    // mimic http database access
    let db: any[] = [];
    return new Observable((observer) => {
      setTimeout(() => {
        let result =
          db.indexOf(control.value) !== -1 ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  onSubmit(classRoom: ClassRoom) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '500px',
      data: { name: 'Class Room', action: 'update' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.spinner = true;
        classRoom.classroom_id = this.currentClassRoom.classroom_id;
        this.service
          .updateClassRoom(this.currentClassRoom.classroom_id, classRoom)
          .subscribe(
            (res) => {
              this.route.navigate(['/teachers-list']);
              this.spinner = false;
            },
            (error) => {
              this.spinner = true;
            }
          );
      }
    });
  }

  cancel(event: any): void {
    this.route.navigate(['/teachers-list']);
  }
}
