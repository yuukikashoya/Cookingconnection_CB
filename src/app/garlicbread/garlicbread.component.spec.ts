import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarlicbreadComponent } from './garlicbread.component';

describe('GarlicbreadComponent', () => {
  let component: GarlicbreadComponent;
  let fixture: ComponentFixture<GarlicbreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarlicbreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarlicbreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
