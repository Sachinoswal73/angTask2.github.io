import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTask2Component } from './sub-task2.component';

describe('SubTask2Component', () => {
  let component: SubTask2Component;
  let fixture: ComponentFixture<SubTask2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubTask2Component]
    });
    fixture = TestBed.createComponent(SubTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
