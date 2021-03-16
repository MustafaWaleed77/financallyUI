export interface ExpenseInterface{
  id: string;
  date: Date;
  name: string;
  category: string;
  price: string;
  payingTo?: string;
  notes?: string;
  tags?: string[];
}
