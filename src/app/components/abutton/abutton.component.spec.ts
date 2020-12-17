import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuttonComponent } from './abutton.component';

describe('AbuttonComponent', () => {
  let component: AbuttonComponent;
  let fixture: ComponentFixture<AbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
