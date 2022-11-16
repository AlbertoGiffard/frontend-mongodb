import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxRequestComponent } from './box-request.component';

describe('BoxRequestComponent', () => {
  let component: BoxRequestComponent;
  let fixture: ComponentFixture<BoxRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
