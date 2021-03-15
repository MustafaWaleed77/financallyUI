import {TransactionCategory} from '../../Models/Category/TransactionCategory';
import {CategoryBuilderInterface} from './CategoryBuilderInterface';

export class TransactionCategoryBuilder implements CategoryBuilderInterface {
  transactionCategory: TransactionCategory = new TransactionCategory();

  build(): TransactionCategory {
    return this.transactionCategory;
  }

  withDate(date: Date): TransactionCategoryBuilder {
    this.transactionCategory.date = date;
    return this;
  }

  withName(name: string): TransactionCategoryBuilder {
    this.transactionCategory.name = name;
    return this;
  }

  withNotes(notes: string): TransactionCategoryBuilder {
    this.transactionCategory.notes = notes;
    return this;
  }

  withTags(tags: string[]): TransactionCategoryBuilder {
    this.transactionCategory.tags = tags;
    return this;
  }

}
