import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpComponent } from './shrimp.component';

describe('ShrimpComponent', () => {
  let component: ShrimpComponent;
  let fixture: ComponentFixture<ShrimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShrimpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShrimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
