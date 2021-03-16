import {ExpenseBuilderInterface} from './ExpenseBuilderInterface';
import {Expense} from '../../Models/Expense/Expense';

export class ExpenseBuilder implements ExpenseBuilderInterface {
  readonly expense: Expense;

  constructor() {
    this.expense = new Expense();
  }

  build(): Expense {
    return this.expense;
  }

  withCategory(category: string): ExpenseBuilder {
    this.expense.category = category;
    return this;
  }

  withDate(date: Date): ExpenseBuilder {
    this.expense.date = date;
    return this;
  }

  withId(id: string): ExpenseBuilder {
    this.expense.id = id;
    return this;
  }

  withName(name: string): ExpenseBuilder {
    this.expense.name = name;
    return this;
  }

  withNotes(notes: string): ExpenseBuilder {
    this.expense.notes = notes;
    return this;
  }

  withPayingTo(payingTo: string): ExpenseBuilder {
    this.expense.payingTo = payingTo;
    return this;
  }

  withPrice(price: string): ExpenseBuilder {
    this.expense.price = price;
    return this;
  }

  withTags(tags: string[]): ExpenseBuilder {
    this.expense.tags = tags;
    return this;
  }

}
