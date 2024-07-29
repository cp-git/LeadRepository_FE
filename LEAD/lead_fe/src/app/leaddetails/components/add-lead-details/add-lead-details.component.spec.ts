import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeadDetailsComponent } from './add-lead-details.component';

describe('AddLeadDetailsComponent', () => {
  let component: AddLeadDetailsComponent;
  let fixture: ComponentFixture<AddLeadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeadDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
