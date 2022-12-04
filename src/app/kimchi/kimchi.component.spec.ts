import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimchiComponent } from './kimchi.component';

describe('KimchiComponent', () => {
  let component: KimchiComponent;
  let fixture: ComponentFixture<KimchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimchiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KimchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
