import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubttComponent } from './subtt.component';

describe('SubttComponent', () => {
  let component: SubttComponent;
  let fixture: ComponentFixture<SubttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubttComponent]
    });
    fixture = TestBed.createComponent(SubttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
