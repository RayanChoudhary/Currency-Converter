#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.redBright.bold.italic('$$$_____Well Come To Rayan Curruncy Converter_____$$$'));

let Curruncy:any = {
    USD:1, //base curruncy
    INR:83.30,
    OMR:0.38,
    AUD:1.52,
    IQD:1308.17,
    HKD:7.83,
    EUR:0.92,
    EGP:47.33,
    IRR:42075,
    IDR:15887,
    NZD:1.66,
    PKR:277.54,
    QAR:3.64,
    SAR:3.75,
    RSD:108.13,
    LKR:298.61,
    YER:250.45,
}

let input = await inquirer.prompt(
    [
        {
            name:'From',
            type:'list',
            choices:["USD","INR","OMR","AUD","IQD","HKD","EUR","EGP","IRR","IDR","NZD","QAR","SAR","RSD","LKR","YER","PKR"],
            message:"Select Curruncy which you want to Convet From"
        },
        {
            name:'To',
            type:'list',
            choices:["USD","INR","OMR","AUD","IQD","HKD","EUR","EGP","IRR","IDR","NZD","QAR","SAR","RSD","LKR","YER","PKR"],
            message:"Select CUrruncy Which yoU want To change to "
        },
        {
            name:'Amount',
            type:'number',
            message:"Enter YOur Amount"
        }
    ]
)

let Curruncyfrom = Curruncy[input.From]
let CurruncyTo = Curruncy[input.To]
let amount = input.Amount
let basedCurruncy = amount / Curruncyfrom
let converted = basedCurruncy * CurruncyTo
console.log(converted);