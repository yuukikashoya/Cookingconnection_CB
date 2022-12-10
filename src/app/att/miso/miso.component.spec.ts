import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisoComponent } from './miso.component';

describe('MisoComponent', () => {
  let component: MisoComponent;
  let fixture: ComponentFixture<MisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
