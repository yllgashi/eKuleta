import TransactionCategory from "./transaction-category.model";

export default class Transaction {
    id?: any;
    date: Date;
    isOutcome: boolean;
    description: string;
    price: number;
    category?: TransactionCategory;
}