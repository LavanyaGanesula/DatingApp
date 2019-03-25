/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReigsterComponent } from './reigster.component';

describe('ReigsterComponent', () => {
  let component: ReigsterComponent;
  let fixture: ComponentFixture<ReigsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReigsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReigsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
