import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TantanmenComponent } from './tantanmen.component';

describe('TantanmenComponent', () => {
  let component: TantanmenComponent;
  let fixture: ComponentFixture<TantanmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TantanmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TantanmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
