import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostComponent } from './blogpost.component';

describe('BlogpostComponent', () => {
  let component: BlogpostComponent;
  let fixture: ComponentFixture<BlogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
