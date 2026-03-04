import { CommandBase } from "../cli_engine/CommandBase";
import { SecurityService } from "../services/SecurityService";

export class SecurityCommands extends CommandBase {

    public register(): void {
        this.program.command("bcrypt-hash <password>")
            .description("Hashes a password using the bcrypt algorithm")
            .action(async (password: string) => await SecurityService.hashPassword(password))

        this.program.command("bcrypt-compare <password> <hash>")
            .description("Compares a plain text password against an existing bcrypt hash")
            .action(async (password: string, hash: string) => await SecurityService.comparePassword(password, hash))
    }
}