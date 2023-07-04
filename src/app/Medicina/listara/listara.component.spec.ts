import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaraComponent } from './listara.component';

describe('ListaraComponent', () => {
  let component: ListaraComponent;
  let fixture: ComponentFixture<ListaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
