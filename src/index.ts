#!/usr/bin/env node
const {Command} = require("commander")
const axios = require("axios")

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

program
.command("mul <num1> <num2>")
.description("Multiplies two numbers")
.action((num1: string, num2: string) => {
    console.log("Product:",parseFloat(num1) * parseFloat(num2))
})

program
.command("div <num1> <num2>")
.description("Divides two numbers")
.action((num1: string, num2: string) => {
    console.log("Quotient:",parseFloat(num1) / parseFloat(num2))
})

program
.command("Name <firstname> <lastname>")
.description("Prints the full name")
.action((firstname: string, lastname: string) => {
    console.log("Full Name:",firstname + " " + lastname)
})



// GITHUB API

program
.command("github <username>")
.description("GitHub user info")
.action(async (username: string) => {
    try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            
            console.log(`\n--- GitHub User: ${response.data.login} ---`)
            console.log(`Name: ${response.data.name || "N/A"}`)
            console.log(`Followers: ${response.data.followers}\n`)
        } 
        
        catch (error) {
            console.log("Error: Could not find user. Make sure the username exists.", error.message)
        }
    }
)




program.parse()


