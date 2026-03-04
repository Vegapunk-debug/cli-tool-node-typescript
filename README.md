# VegaCLI

A versatile, multi-purpose Command Line Interface (CLI) tool built with Node.js, TypeScript, and Commander.js. This tool provides a robust collection of utilities ranging from basic math operations and system diagnostics to developer tools and live API integrations.

## Setup Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** and navigate into the project folder:
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. **Install dependencies(includes commander, axios, bcrypt, ...)**:
   ```bash
   npm install
   ```

3. **Build the project** (compiles TypeScript to JavaScript):
   ```bash
   npm run build
   ```

4. **Link the CLI globally** (Link the CLI globally to your system so you can run the mycli command from anywhere in your terminal):
   ```bash
   npm link
   ```
   (Alternatively, use npm run link-cli if configured in your package.json)
   ```bash
   npm run link-cli
   ```

## Available Usage

### Basic Commands

| Command | Description |
| :--- | :--- |
| `vegacli greet <name>` | Displays a personalized greeting. |
| `vegacli add <num1> <num2>` | Adds two numbers. |
| `vegacli sub <num1> <num2>` | Subtracts the second number from the first. |
| `vegacli mul <num1> <num2>` | Multiplies two numbers. |
| `vegacli div <num1> <num2>` | Divides the first number by the second. |
| `vegacli name <firstname> <lastname>` | Concatenates and displays the full name. |

### System & Developer Tools

| Command | Description |
| :--- | :--- |
| `vegacli sysinfo` | Shows detailed system information (Hostname, OS, Architecture). |
| `vegacli time` | Displays the current local date and time. |
| `vegacli express-base-code` | Generates a boilerplate `server.js` file for an Express.js application. |
| `vegacli bcrypt-hash <password>` | Securely hashes a given password using bcrypt. |
| `vegacli bcrypt-compare <password> <hash>` | Verifies if a password matches a given bcrypt hash. |

### API Integrations

| Command | Description |
| :--- | :--- |
| `vegacli github <username>` | Fetches and displays public information about a GitHub user. |
| `vegacli weather <city>` | Retrieves the current weather conditions for a specified city. |
| `vegacli quote` | Fetches a random inspirational quote from the internet. |
| `vegacli anime-char <name>` | Searches for an anime character and displays their details and bio. |

## Features

- **Modular Structure**: Built with TypeScript for better type safety and maintainability.
- **User-Friendly**: Simple and intuitive command structure.
- **Real-Time Data**: Integrates with external APIs to provide live information.
- **Developer Friendly**: Includes code generation and security utilities.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
