import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.isActive()) { // Usa o novo método isActive para verificar o status
      this.balance += amount; // Acrescenta o valor do empréstimo ao saldo
      console.log(`Você pegou um empréstimo de: ${amount}`);
    } else {
      console.log('Empréstimo negado. Conta inativa.');
    }
  }
  }