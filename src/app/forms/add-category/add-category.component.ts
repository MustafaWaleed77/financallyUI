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
  MAX_TAG_DISPLAY_LENGTH = 10;
  categoryForm!: FormGroup;
  tags: string[] = ['All'];

  @ViewChild('inputElement', {static: false}) inputElement?: ElementRef;

  submitForm(): void {
    for (const field in this.categoryForm.controls) {
      if (this.categoryForm.controls.hasOwnProperty(field)) {
        this.categoryForm.controls[field].markAsDirty();
        this.categoryForm.controls[field].updateValueAndValidity();
      }
    }
    const transactionCategory: ExpenseCategory = this.expenseCategoryBuilder
      .withDate(this.categoryForm.controls.date.value)
      .withName(this.categoryForm.controls.name.value)
      .withNotes(this.categoryForm.controls.notes.value)
      .withTags(this.tags)
      .build();
    console.log(transactionCategory);
    this.reset();
  }

  reset(): void {
    this.categoryForm.reset();
    this.expenseCategoryBuilder = new ExpenseCategoryBuilder();
    this.tags = [];
  }

  constructor(private fb: FormBuilder) {
    this.expenseCategoryBuilder = new ExpenseCategoryBuilder();
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      date: [new Date(), [Validators.required]],
      name: [null, [Validators.required]],
      notes: [null],
      tag: [null],
      remember: [false]
    });
  }


  removeTag(index: number): void {
    this.tags.splice(index, 1);
  }

  editTag(index: number): void {
    this.categoryForm.controls.tag.setValue(this.tags[index]);
    this.tags.splice(index, 1);
  }

  handleInputConfirm(): void {
    const tag: string = this.categoryForm.controls.tag.value;
    if (tag && this.tags.indexOf(tag) === -1) {
      this.tags.push(tag);
    }
    this.categoryForm.controls.tag.setValue(null);
  }
}
