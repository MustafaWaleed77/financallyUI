import {CategoryInterface} from './CategoryInterface';

export class ExpenseCategory {
  readonly props: CategoryInterface;

  constructor() {
    this.props = {id: '', name: ''};
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

}
