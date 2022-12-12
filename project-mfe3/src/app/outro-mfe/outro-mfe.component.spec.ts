import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroMfeComponent } from './outro-mfe.component';

describe('MenuComponent', () => {
  let component: OutroMfeComponent;
  let fixture: ComponentFixture<OutroMfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutroMfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutroMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
