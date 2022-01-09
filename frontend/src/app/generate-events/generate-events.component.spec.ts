import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateEventsComponent } from './generate-events.component';

describe('GenerateEventsComponent', () => {
  let component: GenerateEventsComponent;
  let fixture: ComponentFixture<GenerateEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
