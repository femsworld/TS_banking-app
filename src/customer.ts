class Customer implements Transaction{
    name: string;
    id: string;
    amount: number;
    date: Date;
    transactions: Transaction[];
    constructor(nameOfCustomer: string) {
      this.name = nameOfCustomer;
      this.transactions = [];
      this.id = "001";
      this.amount = 0
      this.date = new Date()
    }
    getName(): string {
      return this.name;
    }
    getId(): string {
      return this.id;
    }
    getTransactions(): Transaction[] {
      return this.transactions;
    }
    getBalance(): number {
      let balance = 0;
      for (let transaction of this.transactions) {
        balance += transaction.amount;
      }
      return balance;
    }
    addTransactions(amount: number): boolean {
      if (this.getBalance() + amount < 0) {
        return false;
      }
      this.amount += amount
      this.transactions.push({amount: this.amount, date: this.date});
      return true;
    }
  }

  interface Transaction {
    amount: number;
    date: Date;
  }
  
  export default Customer;
