import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbComponent } from './editb.component';

describe('EditbComponent', () => {
  let component: EditbComponent;
  let fixture: ComponentFixture<EditbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
