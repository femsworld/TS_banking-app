import Customer from "./customer";

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
      return customer.addTransactions(amount);
    }
    findCustomer(customerId: string): Customer | null {
      return this.customers.find((c) => c.id === customerId) || null;
    }
  }

  export default Branch;