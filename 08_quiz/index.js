import chalk from "chalk";
import inquirer from "inquirer";
let api_link = "https://opentdb.com/api.php?amount=7&category=18&difficulty=easy&type=multiple";
let fetch_data = async (data) => {
    let fetch_Quiz = await fetch(data);
    let res = await fetch_Quiz.json();
    return res.results;
};
let start_quiz = async () => {
    let score = 0;
    let data = await fetch_data(api_link);
    if (data.length < 5) {
        console.log("Not enough questions available.");
        return;
    }
    let name = await inquirer.prompt({
        name: "fname",
        type: "input",
        message: "Enter your name",
    });
    for (let i = 0; i < 5; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            name: "quiz",
            type: "list",
            message: data[i].question,
            choices: answers.map((val) => val),
        });
        if (ans.quiz === data[i].correct_answer) {
            ++score;
        }
    }
    console.log(`${chalk.bold.green(name.fname)}, Your Score Is ${chalk.green.bold(score)} out of ${chalk.bold.red('6')}`);
};
start_quiz();
