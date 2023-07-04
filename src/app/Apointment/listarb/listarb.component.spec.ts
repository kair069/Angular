import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarbComponent } from './listarb.component';

describe('ListarbComponent', () => {
  let component: ListarbComponent;
  let fixture: ComponentFixture<ListarbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
