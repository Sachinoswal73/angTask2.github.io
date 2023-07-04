import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTask1Component } from './sub-task1.component';

describe('SubTask1Component', () => {
  let component: SubTask1Component;
  let fixture: ComponentFixture<SubTask1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubTask1Component]
    });
    fixture = TestBed.createComponent(SubTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
