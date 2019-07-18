import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilltopComponent } from './skilltop.component';

describe('SkilltopComponent', () => {
  let component: SkilltopComponent;
  let fixture: ComponentFixture<SkilltopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilltopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilltopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
