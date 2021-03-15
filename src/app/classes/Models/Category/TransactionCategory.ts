import {CategoryInterface} from './CategoryInterface';

export class TransactionCategory {
  private props: CategoryInterface;

  constructor() {
    this.props = {date: new Date(), name: ''};
  }

  set date(value: Date) {
    this.props.date = value;
  }

  get date(): Date {
    return this.props.date;
  }

  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get notes(): string | undefined {
    return this.props.notes;
  }

  set notes(value: string | undefined) {
    this.props.notes = value;
  }

  get tags(): string[] | undefined {
    return this.props.tags;
  }

  set tags(value: string[] | undefined) {
    this.props.tags = value;
  }
}
