import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { AddTransactionsFormComponent } from './add-transactions-form/add-transactions-form.component';
import {SharedModule} from '../shared/shared.module';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [FormsComponent, AddTransactionsFormComponent, AddCategoryComponent],
  imports: [
    SharedModule,
    FormsRoutingModule
  ],
  exports: [AddTransactionsFormComponent]
})
export class FormsModule { }
