import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [PagesComponent, TransactionsComponent, CategoriesComponent],
  imports: [
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
