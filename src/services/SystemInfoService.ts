import * as os from "os";

export class SystemInfoService {
    public static printSysInfo() {
        console.log("\n --- System & OS Info ---")
        console.log(`Hostname:      ${os.hostname()}`)
        console.log(`Platform:      ${os.platform()} (${os.type()})`)
        console.log(`OS Release:    ${os.release()}`)
        console.log(`OS Version:    ${os.version()}`)
        console.log(`Architecture:  ${os.arch()} / ${os.machine()}`)
    }

    public static printTime() {
        console.log("\n --- Current Date & Time ---")
        console.log(new Date().toLocaleString())
    }
}

// program
// .command("sysinfo")
// .description("Displays system and OS information")
// .action(() => {
//     const os = require("os"); 

//     console.log("\n --- System & OS Info ---")
//     console.log(`Hostname:      ${os.hostname()}`)
//     console.log(`Platform:      ${os.platform()} (${os.type()})`)
//     console.log(`OS Release:    ${os.release()}`)
//     console.log(`OS Version:    ${os.version()}`)
//     console.log(`Architecture:  ${os.arch()} / ${os.machine()}`)
// })

// program
// .command("time")
// .description("Displays the current local date and time")
// .action(() => {
//     const now = new Date()
//     console.log("\n --- Current Date & Time ---")
//     console.log(now.toLocaleString())
// })