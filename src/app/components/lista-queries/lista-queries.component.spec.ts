import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaQueriesComponent } from './lista-queries.component';

describe('ListaQueriesComponent', () => {
  let component: ListaQueriesComponent;
  let fixture: ComponentFixture<ListaQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
