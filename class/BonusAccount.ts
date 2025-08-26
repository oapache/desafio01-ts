import { DioAccount } from "./DioAccount.js";

export class BonusAccount extends DioAccount {
    constructor(name: string,accountNumber: number) {
        super(name, accountNumber)
    }
    deposit = (sendDeposit:number) => {
        if (this.validateStatus ()){
            const valueWithBonus= sendDeposit +10;
            this.balance = this.balance + valueWithBonus;
            console.log ('Deposito com bônus de cadastro novo!',sendDeposit,' \n valor final: R$',this.balance)
            
        }
    }












}
