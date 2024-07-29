import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLeadDetailsComponent } from './upload-lead-details.component';

describe('UploadLeadDetailsComponent', () => {
  let component: UploadLeadDetailsComponent;
  let fixture: ComponentFixture<UploadLeadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLeadDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadLeadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
