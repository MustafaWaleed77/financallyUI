import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import {AddTransactionsFormComponent} from './add-transactions-form/add-transactions-form.component';
import {AddCategoryComponent} from './add-category/add-category.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'addTransaction', component: AddTransactionsFormComponent },
  { path: 'addCategory', component: AddCategoryComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
