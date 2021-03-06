import {ExpenseCategory} from '../../Models/Category/ExpenseCategory';
import {CategoryBuilderInterface} from './CategoryBuilderInterface';

export class ExpenseCategoryBuilder implements CategoryBuilderInterface {
  readonly expenseCategory: ExpenseCategory;

  constructor() {
    this.expenseCategory = new ExpenseCategory();
  }

  build(): ExpenseCategory {
    return this.expenseCategory;
  }

  withId(id: string): ExpenseCategoryBuilder {
    this.expenseCategory.id = id;
    return this;
  }

  withName(name: string): ExpenseCategoryBuilder {
    this.expenseCategory.name = name;
    return this;
  }

  withNotes(notes: string): ExpenseCategoryBuilder {
    this.expenseCategory.notes = notes;
    return this;
  }

}
