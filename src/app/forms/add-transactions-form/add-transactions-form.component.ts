import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-spending-form',
  templateUrl: './add-transactions-form.component.html',
  styleUrls: ['./add-transactions-form.component.scss']
})
export class AddTransactionsFormComponent implements OnInit {
  AddTransactionForm!: FormGroup;

  submitForm(): void {
    for (const field in this.AddTransactionForm.controls) {
      if (this.AddTransactionForm.controls.hasOwnProperty(field)) {
        this.AddTransactionForm.controls[field].markAsDirty();
        this.AddTransactionForm.controls[field].updateValueAndValidity();
      }
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.AddTransactionForm = this.fb.group({
      date: [Date.now(), [Validators.required]],
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      category: [null, [Validators.required]],
      payingTo: [null, []],
      notes: [null, []],
      tags: [null, []],
      remember: [false]
    });
  }
}
