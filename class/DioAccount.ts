import { CompanyAccount } from "./CompanyAccount.js";



export abstract class DioAccount {
    private name: string;
   private readonly accountNumber: number;
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

     // Section Transaction DioAccount 
    deposit = (sendDeposit: number)=> {
        if (this.validateStatus ()){
            this.balance = this.balance + sendDeposit;
            console.log ('Deposito efetuado com sucesso!\nValor depositado: R$',sendDeposit)
                      
        }
    }
    //          Withdraw 
    withdraw = (withdrawValue: number) => {
        if (this.validateWithdraw (withdrawValue)){
            (this.balance = this.balance - withdrawValue)
            console.log ('Saque efetuado no valor R$',withdrawValue)
            
        }
    }
    //          Validation Withdraw
    validateWithdraw = (withdrawStatus: number) => {
    if(this.status === true && this.balance >= withdrawStatus ){
       return true; 
    }
    throw new Error ('Saldo insuficiente');
}

    // Validation section
  validateStatus = () => {
        if(this.status){
            return this.status
        }
            throw new Error ('conta ínvalida');
    }


    // Functions DioAccount 

    setName = (name: string): void => {
      this.name = name
        console.log('Nome alterado com sucesso!')
    }

    // getArea 
    getName = ():void => {
        console.log (this.name)
    }
    getStatus = ():void => {
        console.log (this.status)
    }
    getBalance = ():void => {
        console.log (this.balance)
    }
    getId= ():void => {
        console.log (this.accountNumber)
    }
    

    // RegistrationInfo
    RegistrationInfo= ():void => {
        console.log (
            'Dados Cadastrais: \n Nome:',this.name,'\n Numero da conta:',this.accountNumber,
            '\n Status da conta:',this.status,'\n '
            
        )
    }
        // BankDetails
    BankDetails= ():void => {
        console.log (
            'Informações Bancárias: \n Nome:',this.name,'\n Numero da conta:',this.accountNumber, 
            '\n Status da conta:',this.status,'\n ','Saldo R$',this.balance
            
        )
    }

}