import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionsFormComponent } from './add-transactions-form.component';

describe('SpendingFormComponent', () => {
  let component: AddTransactionsFormComponent;
  let fixture: ComponentFixture<AddTransactionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransactionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
