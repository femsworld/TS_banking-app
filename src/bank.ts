class Bank {
    name: string;
    branches: Branch[];

    constructor(name: string) {
            this.name = name;
            this.branches = [];
    }

    addBranch(nameOfBranch: Branch) : boolean {
        return true;
    }
}
class Branch {
    name: string;
    customers: Customer[];

    constructor(nameOfBranch: string) {
        this.name = nameOfBranch;
        this.customers = [];
        this.id = "Femi";
}
getName() : string {
    return this.name;
}
}

class Customer {
    name: string;
    id: string;
    transactions: {transaction: Transaction}[];

    constructor(nameOfCustomer: string) {
            this.name = nameOfCustomer;
            this.transactions = [];
            this.id = "Femi";
    }
    getName() : string {
        return this.name;
    }
    getId() : string {
        return this.id;
    }
    getTransactions() : {transaction: Transaction}[] {
        return this.transactions;
    }
    getBalance() : number {
        return this.balance;
    }
    
    addTransaction(amount: number): boolean {
        if (this.balance + amount < 0) {
            return false;
        }
        this.balance += amount;
        this.transactions.push(amount);
        return true;
    }

}

interface Transaction{
	amount : number;
	date : Date;
    // balance: number;
}
