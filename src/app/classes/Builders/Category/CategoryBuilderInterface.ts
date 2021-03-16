import {CategoryInterface} from '../../Models/Category/CategoryInterface';

export interface CategoryBuilderInterface {

  withId(id: string): CategoryBuilderInterface;

  withName(name: string): CategoryBuilderInterface;

  withNotes(notes: string): CategoryBuilderInterface;

  build(): CategoryInterface;
}
