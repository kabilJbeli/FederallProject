import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileInformationComponent } from './update-profile-information.component';

describe('UpdateProfileInformationComponent', () => {
  let component: UpdateProfileInformationComponent;
  let fixture: ComponentFixture<UpdateProfileInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
