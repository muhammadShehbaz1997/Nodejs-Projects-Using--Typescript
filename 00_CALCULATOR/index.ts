
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"
import chalk from "chalk";
import { add,Div} from "./additionExport.js";

const sleep = () => {
  return new Promise ((resolve)=> {
    setTimeout(resolve, 2000)
  })
}

async function design(){
var design_A = chalkAnimation.rainbow(`Lets Start Calculation With Me`)
await sleep()
design_A.stop()
}
await design()

async function Making_Calculator (){
  let answers = await inquirer.prompt
  ([
    {
      name : "number1",
      type : "number",
      message : "Select First Number",
    },
    {
      name:"number2",
      type : "number",
      message : "Select Second Number",
    },
    {
      name : "Oprator",
      type : "list",
      choices : ["Addition", "Subtraction", "Division", "Multiplication", ],
      message : "Please Select Opration"
    }
  ])
  
  const {number1, number2, Oprator} = answers

if(answers.Oprator === "Addition"){console.log(
`Your Result ${number1} + ${number2} ==> `,add(number1,number2))

}else if (answers.Oprator === "Subtraction"){
console.log(`your Result ${number1} - ${number2} ==> ${answers.number1 - answers.number2}`)}

else if (answers.Oprator === "Division"){console.log(
`Your Result ${number1} / ${number2} ==> `,  Div(number1,number2))}

else if (answers.Oprator === "Multiplication"){
console.log(`your Result ${number1} * ${number2} ==> ${answers.number1 * answers.number2}`)}
}

async function doWhile(){
  do{
    await Making_Calculator()
    var loop = await inquirer .prompt
    ([
      {
        name : "Again",
        type : "list",
        message : "Do you want to continue Calculating ? Yes Or No",
        choices : ["Yes", "No"]
      }
    ])
  }while(loop.Again === "Yes")
}
await doWhile()