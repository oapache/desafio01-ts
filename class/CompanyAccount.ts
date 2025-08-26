import { DioAccount } from "./DioAccount.js";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (valueLoan: number): void => {
       if (this.validateStatus()) {
        (this.balance = this.balance + valueLoan)
        console.log('Empréstimo aprovado! Valor: R$', valueLoan);
       }
    }
    
    getBalance = ():void => {
        console.log ('Saldo: R$',this.balance)
    }

    


    

}