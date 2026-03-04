import * as bcrypt from "bcrypt";

export class SecurityService {

    public static async hashPassword(password: string) {
        const bcrypt = require("bcrypt")
        const salt = 10
        try {
            const hash = await bcrypt.hash(password, salt)
            console.log("\n Original Password:", password)
            console.log("\n Hashed Password:", hash)
        } 
        catch (error) {
            console.log("Error: Could not hash password.", error.message)
        }
    }

    public static async comparePassword(password: string, hash: string) {
        try {
            const isMatch = await bcrypt.compare(password, hash)
            console.log(`\n Password: ${password}\n Hash: ${hash}`)
            console.log(isMatch ? "Result: MATCH (Access Granted)\n" : "Result: NO MATCH (Access Denied)\n")
        } 
        catch (error: any) {
            console.log("\n Error comparing password to hash.", error.message)
        }
    }
}
