import {ExpenseInterface} from './ExpenseInterface';

export class Expense implements ExpenseInterface{
  private props: ExpenseInterface;

  constructor() {
    this.props = {id: '', date: new Date(), name: '', price: '0', category: '0'};
  }

  get category(): string {
    return this.props.category;
  }

  set category(value: string) {
    this.props.category = value;
  }

  get date(): Date {
    return this.props.date;
  }

  set date(value: Date) {
    this.props.date = value;
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

  get notes(): string | undefined{
    return this.props.notes;
  }

  set notes(value: string | undefined) {
    this.props.notes = value;
  }

  get payingTo(): string | undefined {
    return this.props.payingTo;
  }

  set payingTo(value: string | undefined) {
    this.props.payingTo = value;
  }

  get price(): string {
    return this.props.price;
  }

  set price(value: string) {
    this.props.price = value;
  }

  get tags(): string[] | undefined {
    return this.props.tags;
  }

  set tags(value: string[] | undefined) {
    this.props.tags = value;
  }
}
