import { Command } from "commander"

export abstract class CommandBase {
    protected program: Command

    constructor(program: Command) {
        this.program = program
    }

    abstract register(): void
}