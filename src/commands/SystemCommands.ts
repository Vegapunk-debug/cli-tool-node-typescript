import { CommandBase } from "../cli_engine/CommandBase";
import { SystemInfoService } from "../services/SystemInfoService";

export class SystemCommands extends CommandBase {
    
    public register(): void {
        this.program.command("sysinfo")
            .description("Displays system and OS information")
            .action(() => SystemInfoService.printSysInfo())

        this.program.command("time")
            .description("Displays the current local date and time")
            .action(() => SystemInfoService.printTime())
    }
}