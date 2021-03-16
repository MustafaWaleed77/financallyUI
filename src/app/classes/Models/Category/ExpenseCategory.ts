import {CategoryInterface} from './CategoryInterface';

export class ExpenseCategory {
  private props: CategoryInterface;

  constructor() {
    this.props = {id: '', date: new Date(), name: ''};
  }

  getFields(): CategoryInterface {
    return this.props;
  }

  set id(value: string) {
    this.props.id = value;
  }

  get id(): string {
    return this.props.id;
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
