import {InvoiceInterface} from './InvoiceInterface';
import {Expense} from '../Expense/Expense';

export class Invoice {
  props: InvoiceInterface;

  constructor() {
    this.props = {id: '', name: '', date: new Date(), expenseIds: [], total: ''};
  }

  get id(): string {
    return this.props.id;
  }

  set id(value: string) {
    this.props.id = value;
  }

  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get expense(): Expense {
    return this.props.expense;
  }

  set expense(value: Expense) {
    this.props.expense = value;
  }

  get date(): Date {
    return this.props.date;
  }

  set date(value: Date) {
    this.props.date = value;
  }

  get total(): string {
    return this.props.total;
  }

  set total(value: string) {
    this.props.total = value;
  }
}
