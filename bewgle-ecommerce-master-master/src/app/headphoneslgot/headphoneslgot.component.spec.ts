import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphoneslgotComponent } from './headphoneslgot.component';

describe('HeadphoneslgotComponent', () => {
  let component: HeadphoneslgotComponent;
  let fixture: ComponentFixture<HeadphoneslgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadphoneslgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphoneslgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
