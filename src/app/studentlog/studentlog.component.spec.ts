import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlogComponent } from './studentlog.component';

describe('StudentlogComponent', () => {
  let component: StudentlogComponent;
  let fixture: ComponentFixture<StudentlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
