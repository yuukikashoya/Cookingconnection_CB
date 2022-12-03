import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurryComponent } from './curry.component';

describe('CurryComponent', () => {
  let component: CurryComponent;
  let fixture: ComponentFixture<CurryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
