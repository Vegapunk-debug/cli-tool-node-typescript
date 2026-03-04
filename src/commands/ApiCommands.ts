import { CommandBase } from "../cli_engine/CommandBase";
import { ApiService } from "../services/ApiService";

export class ApiCommands extends CommandBase {
    
    public register(): void {
        this.program.command("github <username>")
            .description("GitHub user info")
            .action(async (username: string) => await ApiService.getGithub(username))

        this.program.command("weather <city>")
            .description("Current weather for a specified city")
            .action(async (city: string) => await ApiService.getWeather(city))

        this.program.command("quote")
            .description("Fetches a random quote from the internet")
            .action(async () => await ApiService.getQuote());

        this.program.command("anime-char <name>")
            .description("Fetches details about an anime character")
            .action(async (name: string) => await ApiService.getAnimeChar(name))
    }
}