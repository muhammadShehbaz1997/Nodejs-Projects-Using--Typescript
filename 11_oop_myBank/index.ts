import  {faker} from  "@faker-js/faker"
import inquirer from "inquirer";
import chalk from "chalk";

class Customer {
  fullname: string;
  age: number;
  gender: string;
  mobile_number: number;
  account_number: number;

  constructor(
    name: string,
    age: number,
    gender: string,
    mobile: number,
    account: number
  ) {
    this.fullname = name;
    this.age = age;
    this.gender = gender;
    this.mobile_number = mobile;
    this.account_number = account;
  }
}

interface BankAccount {
  accountNumber: number;
  balance: number;
}

class Bank {
  customers: Customer[] = [];
  accounts: BankAccount[] = [];

  addcostomer (obj: Customer){
    this.customers.push(obj);
  }

  addAccount (obj: BankAccount){
    this.accounts.push(obj);
  }

  transiction (accObj: BankAccount){
    let newAccounts = this.accounts.filter(acc => acc.accountNumber !== accObj.accountNumber)
    this.accounts = [...newAccounts, accObj]
  }
}

let myBank = new Bank();
let cos: Customer = new Customer("Shehbaz Niazi", 25, "Male", 3190328476, 10001);

for (let i: number = 1; i <= 3; i++) {
let fullname = faker.person.firstName("male")
const num = parseInt(faker.phone.number('+4891#######'))
let cus = new Customer (fullname,25 *i, "male",num, 1000 +i)
myBank.addcostomer(cus)
myBank.addAccount({accountNumber: cus.account_number, balance: 100*i})
}

async function bank_service (bank: Bank){
  do{ let service = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please Select Your Service",
    choices: ["View Balance", "Cash Withdrawl", "Cash Deposit", "Exit"]
  })

  // View Balance 
  if (service.select === "View Balance"){
    let res = await inquirer .prompt({
      name: "num",
      type: "input",
      message :"Please Enter Your Account Number",
    })
    let account = myBank.accounts.find((acc)=>acc.accountNumber == res.num )
    if(!account){
      console.log(chalk.red.bold.underline("Invalid Account Number")); 
    }
    if(account){
      let name = myBank.customers.find((item) =>item.account_number == account?.accountNumber )
      console.log(
        `Dear ${chalk.green.bold(name?.fullname)} Your account balance iS ${chalk.italic.blue.bold("$",account.balance)}`
      );
      
    }
  }
  // Cash Deposite
  if (service.select === "Cash Deposit"){
    let res = await inquirer .prompt({
      name: "num",
      type: "input",
      message :"Please Enter Your Account Number",
    })
    let account = myBank.accounts.find((acc)=>acc.accountNumber == res.num )
    if(!account){
      console.log(chalk.red.bold.underline("Invalid Account Number"));    
    }
    if(account){
      let ans = await inquirer.prompt({
        name: "rupee",
        type: "number",
        message: "Please enter your Amount."
      })
      
      let newBalance = account.balance + ans.rupee
      bank.transiction({accountNumber:account.accountNumber,balance: newBalance})
      console.log(newBalance)  
    }
  }
  // Cash Withdrawl
  if (service.select === "Cash Withdrawl"){
    let res = await inquirer .prompt({
      name: "num",
      type: "input",
      message :"Please Enter Your Account Number",
    })
    let account = myBank.accounts.find((acc)=>acc.accountNumber == res.num )
    if(!account){
      console.log(chalk.red.bold.underline("Invalid Account Number"));    
    }
    if(account){
      let ans = await inquirer.prompt({
        name: "rupee",
        type: "number",
        message: "Please enter your Amount."
      })
      if(ans.rupee > account.balance){
        console.log(chalk.red.bold.italic.underline("Your current balance is insufficient...."))
      }

      let newBalance = account.balance - ans.rupee
      bank.transiction({accountNumber:account.accountNumber,balance: newBalance})
    }  
  }
  // Cash Eixt
  if (service.select === "Exit"){
    return;
  }
}
  while(true)
}

bank_service(myBank)