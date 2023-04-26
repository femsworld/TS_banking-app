import Customer from "./customer";
import Branch from "./branch";

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
    console.log('customerID ==', customerId)
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

export default Bank;