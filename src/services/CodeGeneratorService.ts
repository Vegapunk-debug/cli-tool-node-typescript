import * as fs from "fs";

export class CodeGeneratorService {
    public static generateExpress() {
        
    const serverCode = `const express = require('express')
                        const app = express()
                        const PORT = process.env.PORT || 3000

                        app.use(express.json())

                        app.get('/', (req, res) => {
                        res.status(200).json({ message: 'Server is running!' })
                        })

                        app.listen(PORT, () => {
                        console.log(\`Server listening on port \${PORT}\`)
                        })`
        try {
            fs.writeFileSync('server.js', serverCode)
            console.log("\n Created server.js with a basic Express setup!\n")
        } catch (err) {
            console.log("\n Error creating file.\n")
        }
    }
}