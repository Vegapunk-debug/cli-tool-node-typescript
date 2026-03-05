import { CommandBase } from "../cli_engine/CommandBase";
import { CodeGeneratorService } from "../services/CodeGeneratorService";

export class CodeGeneratorCommands extends CommandBase {
    public register(): void {
        this.program.command("express-base-code")
            .description("Generates a simple Express.js server boilerplate Code.")
            .action(() => CodeGeneratorService.generateExpress())
    }
}