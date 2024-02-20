export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    protected balance: number = 0
    private status: boolean = true
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }
  
    setName = (name: string): void => {
      this.name = name
      console.log('Nome alterado com sucesso!')
    }
  
    getName = (): string => {
      return this.name
    }
    
  
    deposit = (amount: number): void => {
        if(this.isActive()) { // Valida se a conta está ativa.
          this.balance += amount; // Adiciona o valor ao saldo atual.
          console.log('Você depositou: ' + amount);
      }
    }
  
    withdraw = (amount: number): void => {
        if(this.validateStatus() && this.balance >= amount) { // Valida se a conta está ativa e se há saldo suficiente.
          this.balance -= amount; // Subtrai o valor do saldo atual.
          console.log('Você sacou: ' + amount);
        } else {
          console.log('Saldo insuficiente ou conta inativa.');
        }
    }
  
    getBalance = (): void => {
      console.log(this.balance)
    }

 
  
    private validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }

    protected isActive(): boolean {
        try {
          return this.validateStatus(); // Tenta validar o status
        } catch (error) {
          console.error(error);
          return false; // Retorna falso se a validação falhar
        }
      }
  }