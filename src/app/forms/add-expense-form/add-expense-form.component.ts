import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExpenseCategory} from '../../classes/Models/Category/ExpenseCategory';
import {ExpenseCategoryBuilder} from '../../classes/Builders/Category/ExpenseCategoryBuilder';
import {ExpenseBuilder} from '../../classes/Builders/Expense/ExpenseBuilder';
import {Expense} from '../../classes/Models/Expense/Expense';

@Component({
  selector: 'app-spending-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.scss']
})
export class AddExpenseFormComponent implements OnInit {
  expenseBuilder: ExpenseBuilder;
  addExpenseForm!: FormGroup;
  categories: ExpenseCategory[] = [];
  MAX_TAG_DISPLAY_LENGTH = 10;
  MAX_FRACTION_LENGTH = 5;
  tags: string[] = [];

  constructor(private fb: FormBuilder) {
    this.expenseBuilder = new ExpenseBuilder();
  }

  fillCategories(): void {
    // temp value
    this.categories = [
      new ExpenseCategoryBuilder()
        .withId('1')
        .withName('General')
        .build(),
      new ExpenseCategoryBuilder()
        .withId('2')
        .withName('Nice')
        .build(),
      new ExpenseCategoryBuilder()
        .withId('3')
        .withName('Food')
        .build()
    ];
  }

  ngOnInit(): void {
    this.addExpenseForm = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.pattern(`^\\d+(\.\\d{1,${this.MAX_FRACTION_LENGTH}})?`)]],
      category: [null, [Validators.required]],
      notes: [null],
      tag: [null],
      remember: [false]
    });
    this.fillCategories();
  }


  submitForm(): void {
    for (const field in this.addExpenseForm.controls) {
      if (this.addExpenseForm.controls.hasOwnProperty(field)) {
        this.addExpenseForm.controls[field].markAsDirty();
        this.addExpenseForm.controls[field].updateValueAndValidity();
      }
    }
    const expense: Expense = this.expenseBuilder
      .withCategory(this.addExpenseForm.controls.category.value)
      .withName(this.addExpenseForm.controls.name.value)
      .withNotes(this.addExpenseForm.controls.notes.value)
      .withPrice(this.addExpenseForm.controls.price.value)
      .withTags(this.tags)
      .build();
    console.log(expense);
    this.reset();

  }

  reset(): void {
    this.addExpenseForm.reset();
    this.expenseBuilder = new ExpenseBuilder();
    this.tags = [];
  }


  removeTag(index: number): void {
    this.tags.splice(index, 1);
  }

  editTag(index: number): void {
    this.addExpenseForm.controls.tag.setValue(this.tags[index]);
    this.tags.splice(index, 1);
  }

  handleInputConfirm(): void {
    const tag: string = this.addExpenseForm.controls.tag.value;
    if (tag && this.tags.indexOf(tag) === -1) {
      this.tags.push(tag);
    }
    this.addExpenseForm.controls.tag.setValue(null);
  }
}
