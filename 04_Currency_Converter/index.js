import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
};
async function loop() {
    let design = chalkAnimation.rainbow(`TypeScript console app Currency Converter`);
    await sleep(), design.stop();
}
await loop();
let Converter = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "GBP": 1,
        "PKR": 271.79,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50,
    }
};
let answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.blue("Select Your Currency"),
        choices: ["PKR", "USD", "GBP"],
    },
    {
        name: "to",
        type: "list",
        message: chalk.yellow("Select Currency do You Convert"),
        choices: ["GBP", "PKR", "USD",],
    },
    {
        name: "Amount",
        type: "number",
        message: "Please Enter Amount ",
    },
]);
let { from, to, Amount } = answers;
if (from && to && Amount) {
    let result = Converter[from][to] * Amount;
    console.log(chalk.green(`Your Conversation from ${from} to ${to} is ${result}`));
}
else {
    console.log(chalk.red(`Invalid Inputs`));
}
// console.log(answers);
