import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
companyAccount.getLoan(200);
console.log(companyAccount)

const specialAccount = new SpecialAccount("Special", 3);
specialAccount.deposit(100); // Realiza um depósito de 110 devido à lógica de bônus

console.log(`Saldo após depósito: ${specialAccount.getBalance()}`);