var prompt = require('prompt-sync')({sigint:true});  
const figlet = require('figlet');
const chalk = require('chalk');  
const inquirer = require('inquirer')
const { printTable } = require('console-table-printer');

function getTitle(){
  let azar = Math.random()
  let mess = 'Banner'
  if(azar > 0 && azar <= 0.2){
    mess = 'Colossal'
  }
  if(azar > 0.2 && azar <= 0.4){
    mess = 'Epic'
  }
  if(azar > 0.4 && azar <= 0.6){
    mess = 'Banner'
  }
  if(azar > 0.6 && azar <= 0.8){
    mess = 'Big Money-ne'
  }
  if(azar > 0.8 && azar <= 1){
    mess ='Big Money-sw'
  }
  return chalk.greenBright(
    figlet.textSync('TIP - CALCULATOR',
      {
        horizontalLayout: 'full',
        font: mess
      }
    )
  )
}
function EmptyTable(){
  const tableview = [
    {bill_amount: 0,'tip (%)': chalk.green(0 +'%'), tip: chalk.yellow(0*0/100), total: chalk.cyan(0+0*0/100)}
  ]
  printTable(tableview);
}

function getQuestion(question){
    const {billAmount,porcentual} = question
    let nbill = parseInt(billAmount);
    let nporcentual = parseFloat(porcentual)
    return [
      {
        'bill amount': '$'+billAmount, 'tip (%)':porcentual+ '%','tip':'$'+chalk.yellow(nbill*nporcentual/100),'total':'$'+chalk.cyan(nbill+nbill*nporcentual/100)
      }
    ]
}
function ValueQuestion(question){
  const {billAmount,porcentual} = question
  const message = 'bill amount'
  const message2 ='tip'
  return inquirer.prompt([
    {
      name: 'billAmount',
      type: 'number',
      message: message,
      default: billAmount,
      
      validate: function(value){
        if(value >= 0){
            return true
        } else {
            return 0
        }
    }
    },
    {
      name: 'porcentual',
      type: 'number',
      message: message2,
      default: porcentual,
      validate: function(value){
        if(value != 0){
            return true
        } else {
            return ''
        }
    }
    }
  ])
}
function view(model){
  return {
    title: getTitle(),
    table: getQuestion(model)
  }
}
module.exports = {
  EmptyTable,
  view,
  ValueQuestion,
}