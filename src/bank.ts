class Bank {
  name: string;
  branches: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(nameOfBranch: Branch): boolean {
    if (this.branches.includes(nameOfBranch)) {
      return false;
    }
    this.branches.push(nameOfBranch);
    return true;
  }
  addCustomer(branch: Branch, customer: Customer): boolean {
    if (!this.checkBranch(branch)) {
      return false;
    }
    return branch.addCustomer(customer);
  }
  addCustomerTransaction(
    branch: Branch,
    customerId: string,
    amount: number
  ): boolean {
    if (!this.checkBranch(branch)) {
      return false;
    }
    return branch.addCustomerTransaction(customerId, amount);
  }
  findBranchByName(name: string): Branch[] | null {
    let matchedBranches = this.branches.filter(
      (branch) => branch.name === name
    );
    if (matchedBranches.length === 0) {
      return null;
    }
    return matchedBranches;
  }
  checkBranch(branch: Branch): boolean {
    return this.branches.includes(branch);
  }
  listCustomers(branch: Branch, showTransactions: boolean): boolean {
    if (!this.checkBranch(branch)) {
      return false;
    }
    // branch.listCustomers(showTransactions);
    branch.getCustomers().forEach((customer) => {
        console.log(customer.getName());
        if (showTransactions) {
          customer
            .getTransactions()
            .forEach((transaction) => console.log(transaction));
        }
      });
    return true;
  }
}
class Branch {
  name: string;
  customers: Customer[];

  constructor(nameOfBranch: string) {
    this.name = nameOfBranch;
    this.customers = [];
  }
  getName(): string {
    return this.name;
  }
  getCustomers(): Customer[] {
    return this.customers;
  }
  addCustomer(customer: Customer): boolean {
    if (this.customers.some((c) => c.id === customer.id)) {
      return false;
    }
    this.customers.push(customer);
    return true;
  }
  addCustomerTransaction(customerId: string, amount: number): boolean {
    const customer = this.findCustomer(customerId);
    if (customer === null) {
      return false;
    }
    return customer.addTransaction(amount);
  }
  findCustomer(customerId: string): Customer | null {
    return this.customers.find((c) => c.id === customerId) || null;
  }
}

class Customer {
  name: string;
  id: string;
  transactions: Transaction[];
  //   transactions: { transaction: Transaction }[];

  constructor(nameOfCustomer: string) {
    this.name = nameOfCustomer;
    this.transactions = [];
    this.id = "Femi";
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

  //   addTransaction(amount: number): boolean {
  //     if (this.balance + amount < 0) {
  //       return false;
  //     }
  //     this.balance += amount;
  //     this.transactions.push(amount);
  //     return true;
  //   }
  addTransaction(amount: number): boolean {
    if (this.getBalance() + amount < 0) {
      return false;
    }
    let transaction = new Transaction(amount);
    this.transactions.push(transaction);
    return true;
  }
}

interface Transaction {
  amount: number;
  date: Date;
  // balance: number;
}
