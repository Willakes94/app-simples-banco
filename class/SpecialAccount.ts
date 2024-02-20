import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (amount: number): void => {
    if(this.isActive()) { // Valida se a conta está ativa.
      this.balance += amount+10; // Adiciona o valor ao saldo atual.
      console.log('Você depositou: ' + amount);
  }
  }
  }