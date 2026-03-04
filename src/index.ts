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

program
.command("sysinfo")
.description("Displays system and OS information")
.action(() => {
    const os = require("os"); 

    console.log("\n --- System & OS Info ---")
    console.log(`Hostname:      ${os.hostname()}`)
    console.log(`Platform:      ${os.platform()} (${os.type()})`)
    console.log(`OS Release:    ${os.release()}`)
    console.log(`OS Version:    ${os.version()}`)
    console.log(`Architecture:  ${os.arch()} / ${os.machine()}`)
})

program
.command("time")
.description("Displays the current local date and time")
.action(() => {
    const now = new Date()
    console.log("\n --- Current Date & Time ---")
    console.log(now.toLocaleString())
})

program
.command("express-base-code")
.description("Generates a simple Express.js server boilerplate")
.action(() => {
    const fs = require('fs')
    const serverCode = `const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running!' })
})

app.listen(PORT, () => {
  console.log(\`Server listening on port \${PORT}\`)
})`

    try {

        fs.writeFileSync('server.js', serverCode)
        console.log("\n Created server.js with a basic Express setup!\n")

    } catch (err) {
        console.log("\n Error creating file.\n")
    }
})

program
.command("bcrypt-hash <password>")
.description("Hashes a password using the bcrypt algorithm")
.action(async (password: string) => {
    const bcrypt = require("bcrypt")
    const salt = 10
    try {
        const hash = await bcrypt.hash(password, salt)
        console.log("\n Original Password:", password)
        console.log("\n Hashed Password:", hash)
        
    } catch (error) {
        console.log("Error: Could not hash password.", error.message)
    }
})

program
.command("bcrypt-compare <password> <hash>")
.description("Compares a plain text password against an existing bcrypt hash")
.action(async (password: string, hash: string) => {
    const bcrypt = require('bcrypt')
    
    try {

        const isMatch = await bcrypt.compare(password, hash)
        
        console.log(`\n Password: ${password}`)
        console.log(` Hash: ${hash}`)
        
        if (isMatch) {
            console.log("Result: MATCH (Access Granted)\n")
        } 
        else {
            console.log("Result: NO MATCH (Access Denied)\n")
        }
    } catch (error) {
        console.log("\n Error comparing password to hash.", error.message)
    }
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
            console.log(`Followers: ${response.data.followers}`)
            console.log(`Repositories: ${response.data.public_repos}\n`)
            console.log(`Bio: ${response.data.bio}\n`)
            console.log(`Profile URL: ${response.data.html_url}\n`)
        } 
        
        catch (error) {
            console.log("Error: Could not find user. Make sure the username exists.", error.message)
        }
    }
)

program
.command("weather <city>")
.description("Current weather for a specified city")
.action(async (city: string) => {
    try {

        const response = await axios.get(`https://wttr.in/${city}?format=3`)
        console.log(`\n Weather of ${city}: ${response.data}`)
    } 
    catch (error: any) {
        console.log("\n Error: Could not fetch weather for that location.\n",error.message)
    }
})

program
.command("quote")
.description("Fetches a random quote from the internet")
.action(async () => {
    try {

        const response = await axios.get("https://dummyjson.com/quotes/random")
        console.log(`\n "${response.data.quote}"`)
        console.log(` — ${response.data.author}\n`)

    } 
    catch (error: any) {
        console.log("\n Error: Could not fetch a quote right now.\n",error.message);
    }
})

program
.command("anime-char <name>")
.description("Fetches details about an anime character")
.action(async (name: string) => {
    try {

        const response = await axios.get(`https://api.jikan.moe/v4/characters?q=${name}&limit=1`)
        const character = response.data.data[0]
        
        console.log(`\n --- ${character.name} ---`)
        console.log(`About: ${character.about ? character.about.substring(0, 200) + '...' : 'No bio available.'}`)
    } catch (error: any) {
        console.log("\n Error: Could not find that character. Try another name!\n")
    }
})

program.parse()


