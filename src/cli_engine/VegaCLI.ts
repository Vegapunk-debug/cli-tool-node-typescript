import { Command } from "commander";
import { MathCommands } from "../commands/MathCommands";
import { TextCommands } from "../commands/TextCommands";
import { SystemCommands } from "../commands/SystemCommands";
import { CodeGeneratorCommands } from "../commands/CodeGeneratorCommands";
import { SecurityCommands } from "../commands/SecurityCommands";
import { ApiCommands } from "../commands/ApiCommands";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";

export class VegaCLI {
    private program: Command

    constructor() {
        this.program = new Command()
        this.program
            .name("vegacli")
            .description("A modular, Object-Oriented CLI tool by Vegapunk")
            .version("1.0.0")
    }

    public async run() {
        new MathCommands(this.program).register()
        new TextCommands(this.program).register()
        new SystemCommands(this.program).register()
        new CodeGeneratorCommands(this.program).register()
        new SecurityCommands(this.program).register()
        new ApiCommands(this.program).register()

        if (process.argv.length < 3) {
            console.clear()
            const banner = figlet.textSync("VEGA", { horizontalLayout: "full" })
            const anim = chalkAnimation.rainbow(banner)

            setTimeout(() => {
                anim.stop()
                this.program.outputHelp()
            }, 1500)
            return
        }

        await this.program.parseAsync(process.argv)
    }
}