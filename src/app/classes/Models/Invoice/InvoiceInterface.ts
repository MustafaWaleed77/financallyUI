export interface InvoiceInterface {
  id: string;
  name: string;
  expensesIds: string[];
  date: Date;
  total: string;
}
