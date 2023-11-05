#!/usr/bin/env node
import inquirer from "inquirer";
import chlakAnimation from "chalk-animation";
import chalk from "chalk";
;
let sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    });
};
let first_Step = chlakAnimation.rainbow(`Let's Start Calculation`);
await sleep();
first_Step.stop();
let balance = Math.floor(Math.random() * 10000000);
async function Collect_Data() {
    let answers = await inquirer.prompt([
        {
            name: "userID",
            type: "input",
            message: chalk.green.bold(`Please enter your user ID`)
        },
        {
            name: "userPin",
            type: "number",
            message: chalk.green.bold(`Please enter your user PIN`),
            when(answers) {
                return answers.userID;
            }
        },
        {
            name: "Account_Type",
            type: "list",
            message: chalk.yellow.bold(`Please Select Your Account Type`),
            choices: ["Current Account", "Saving Account",],
            when(answers) {
                return answers.userPin;
            }
        },
        {
            name: "Transiction_Type",
            type: "list",
            message: "Please Select Your Withdrawl Option",
            choices: ["Fast Cash", "Cash Withdrawl"],
            when(answers) {
                return answers.Account_Type;
            }
        },
        {
            name: "amount",
            type: "list",
            message: chalk.blue.bold(`Select Your  Amount--\t your Current Balance is: (${balance}) `),
            choices: ["10000", "20000", "30000", "40000", "50000"],
            when(answers) {
                return answers.Transiction_Type === "Fast Cash";
            }
        },
        {
            name: "amount",
            type: "number",
            message: chalk.blue.bold(`Select Your Amount--- \tYour Current Balance is: ${balance}\n `),
            when(answers) {
                return answers.Transiction_Type === "Cash Withdrawl";
            }
        }
    ]);
    if (answers.userID && answers.userPin) {
        if (balance >= answers.amount) {
            let remaning = balance - answers.amount;
            console.log(chalk.red.bold(`Transiction Successfully \n Your Reamaning Balance Is : `, remaning));
        }
        else {
            console.log(chalk.bgRed.white.bold(`Insufficient Balance !!`));
        }
    }
}
async function StartLoop() {
    do {
        await Collect_Data();
        var loop = await inquirer.prompt({
            name: "restart",
            type: "list",
            message: "Do you want to Continue-? Yes Or No ",
            choices: ["Yes", "No"],
        });
    } while (loop.restart === "Yes");
}
await StartLoop();
