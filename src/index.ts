#!/usr/bin/env node
const {Command} = require("commander")

const program = new Command()

program
.command("greet <name>")
.description("Greets the user")
.action((name: string) => {
    console.log(`Hello ${name}`)

})

program
.command("add <num1> <num2>")
.description("Adds two numbers")
.action((num1: string, num2: string) => {
    console.log("Sum:",parseFloat(num1) + parseFloat(num2))
})

program
.command("sub <num1> <num2>")
.description("Subtracts two numbers")
.action((num1: string, num2: string) => {
    console.log("Difference:",parseFloat(num1) - parseFloat(num2))
})

program.parse()
