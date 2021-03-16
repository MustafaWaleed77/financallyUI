import {ExpenseInterface} from '../../Models/Expense/ExpenseInterface';

export interface ExpenseBuilderInterface {

  withId(id: string): ExpenseBuilderInterface;

  withDate(date: Date): ExpenseBuilderInterface;

  withName(name: string): ExpenseBuilderInterface;

  withCategory(category: string): ExpenseBuilderInterface;

  withPrice(price: string): ExpenseBuilderInterface;

  withPayingTo(payingTo: string): ExpenseBuilderInterface;

  withTags(tags: string[]): ExpenseBuilderInterface;

  withNotes(notes: string): ExpenseBuilderInterface;

  build(): ExpenseInterface;
}
