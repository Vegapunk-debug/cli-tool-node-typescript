import { CommandBase } from "../cli_engine/CommandBase";

export class TextCommands extends CommandBase {
    public register(): void {
        this.program.command("greet <name>")
            .description("Greets the user")
            .action((name: string) => console.log(`Hello ${name}`))


        this.program.command("Name <firstname> <lastname>")
            .description("Prints the full name")
            .action((firstname: string, lastname: string) => console.log("Full Name:", firstname + " " + lastname))
    }
}