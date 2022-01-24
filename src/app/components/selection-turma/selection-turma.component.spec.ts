import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTurmaComponent } from './selection-turma.component';

describe('SelectionTurmaComponent', () => {
  let component: SelectionTurmaComponent;
  let fixture: ComponentFixture<SelectionTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
