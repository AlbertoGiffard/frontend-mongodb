import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxResponseComponent } from './box-response.component';

describe('BoxResponseComponent', () => {
  let component: BoxResponseComponent;
  let fixture: ComponentFixture<BoxResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
