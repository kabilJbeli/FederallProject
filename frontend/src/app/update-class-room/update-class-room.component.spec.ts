import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassRoomComponent } from './update-class-room.component';

describe('UpdateClassRoomComponent', () => {
  let component: UpdateClassRoomComponent;
  let fixture: ComponentFixture<UpdateClassRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClassRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
