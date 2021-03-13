import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryForm!: FormGroup;

  submitForm(): void {
    for (const field in this.categoryForm.controls) {
      if (this.categoryForm.controls.hasOwnProperty(field)) {
        this.categoryForm.controls[field].markAsDirty();
        this.categoryForm.controls[field].updateValueAndValidity();
      }
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      date: [Date.now(), [Validators.required]],
      name: [null, [Validators.required]],
      notes: [null, []],
      tags: [null, []],
      remember: [false]
    });
  }
}
