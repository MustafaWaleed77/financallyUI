import {CategoryInterface} from '../../Models/Category/CategoryInterface';

export interface CategoryBuilderInterface {

  withId(id: string): CategoryBuilderInterface;

  withDate(date: Date): CategoryBuilderInterface;

  withName(name: string): CategoryBuilderInterface;

  withTags(tags: string[]): CategoryBuilderInterface;

  withNotes(notes: string): CategoryBuilderInterface;

  build(): CategoryInterface;
}
