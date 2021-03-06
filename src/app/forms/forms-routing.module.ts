import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import {AddExpenseFormComponent} from './add-expense-form/add-expense-form.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {AddInvoiceComponent} from './add-invoice/add-invoice.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'addTransaction', component: AddExpenseFormComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'addInvoice', component: AddInvoiceComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
