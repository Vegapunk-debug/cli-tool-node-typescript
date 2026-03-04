import { CommandBase } from "../cli_engine/CommandBase";

export class MathCommands extends CommandBase {

    public register() {
        this.program
        .command("add <num1> <num2>")
        .description("Adds two numbers")
        .action((num1: string, num2: string) => {
            console.log("Sum:",parseFloat(num1) + parseFloat(num2))
        })

        this.program
        .command("sub <num1> <num2>")
        .description("Subtracts two numbers")
        .action((num1: string, num2: string) => {
            console.log("Difference:",parseFloat(num1) - parseFloat(num2))
        })

        this.program
        .command("mul <num1> <num2>")
        .description("Multiplies two numbers")
        .action((num1: string, num2: string) => {
            console.log("Product:",parseFloat(num1) * parseFloat(num2))
        })

        this.program
        .command("div <num1> <num2>")
        .description("Divides two numbers")
        .action((num1: string, num2: string) => {
            console.log("Quotient:",parseFloat(num1) / parseFloat(num2))
        })
    }
}