import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExpenseCategory} from '../../classes/Models/Category/ExpenseCategory';
import {ExpenseCategoryBuilder} from '../../classes/Builders/Category/ExpenseCategoryBuilder';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  expenseCategoryBuilder: ExpenseCategoryBuilder;
  categoryForm!: FormGroup;

  @ViewChild('inputElement', {static: false}) inputElement?: ElementRef;

  submitForm(): void {
    for (const field in this.categoryForm.controls) {
      if (this.categoryForm.controls.hasOwnProperty(field)) {
        this.categoryForm.controls[field].markAsDirty();
        this.categoryForm.controls[field].updateValueAndValidity();
      }
    }
    const transactionCategory: ExpenseCategory = this.expenseCategoryBuilder
      .withName(this.categoryForm.controls.name.value)
      .withNotes(this.categoryForm.controls.notes.value)
      .build();
    console.log(transactionCategory);
    this.reset();
  }

  reset(): void {
    this.categoryForm.reset();
    this.expenseCategoryBuilder = new ExpenseCategoryBuilder();
  }

  constructor(private fb: FormBuilder) {
    this.expenseCategoryBuilder = new ExpenseCategoryBuilder();
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      notes: [null],
      remember: [false]
    });
  }
}
