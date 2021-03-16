import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { AddExpenseFormComponent } from './add-expense-form/add-expense-form.component';
import {SharedModule} from '../shared/shared.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import {ExpenseCategoryBuilder} from '../classes/Builders/Category/ExpenseCategoryBuilder';


@NgModule({
  declarations: [FormsComponent, AddExpenseFormComponent, AddCategoryComponent],
  imports: [
    SharedModule,
    FormsRoutingModule
  ],
  exports: [AddExpenseFormComponent],
  providers: [ExpenseCategoryBuilder]
})
export class FormsModule { }
