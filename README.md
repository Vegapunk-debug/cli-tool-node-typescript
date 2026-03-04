# VegaCLI
<div align="center">

<pre>
  ┌────────────────────────────────────────────────┐
  │                                                │
  │   ██╗   ██╗███████╗ ██████╗  █████╗            │
  │   ██║   ██║██╔════╝██╔════╝ ██╔══██╗           │
  │   ██║   ██║█████╗  ██║  ███╗███████║           │
  │   ╚██╗ ██╔╝██╔══╝  ██║   ██║██╔══██║           │
  │    ╚████╔╝ ███████╗╚██████╔╝██║  ██║           │
  │     ╚═══╝  ╚══════╝ ╚═════╝ ╚═╝  ╚═╝           │
  │                                                │
  │                 Version 1.0.0                  │
  └────────────────────────────────────────────────┘
</pre>

<p align="center">
  <a href="https://github.com/Vegapunk-debug/VegaCLI">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&color=32CD32&center=true&vCenter=true&width=600&lines=Versatile+Engineering+%26+General+Automation;A+Multi-Purpose+TypeScript+CLI+Toolkit;Developer+Utilities+at+your+fingertips;Live+API+Integrations+in+your+Terminal" alt="Typing SVG" />
  </a>
</p>

<img src="https://raw.githubusercontent.com/Vegapunk-debug/VegaCLI/main/assets/demo.gif" alt="VegaCLI Animated Demo" width="700" style="border-radius: 10px;">

<br/>

```text
  ┌────────────────────────────────────────────────┐
  │                                                │
  │   ██╗   ██╗███████╗ ██████╗  █████╗            │
  │   ██║   ██║██╔════╝██╔════╝ ██╔══██╗           │
  │   ██║   ██║█████╗  ██║  ███╗███████║           │
  │   ╚██╗ ██╔╝██╔══╝  ██║   ██║██╔══██║           │
  │    ╚████╔╝ ███████╗╚██████╔╝██║  ██║           │
  │     ╚═══╝  ╚══════╝ ╚═════╝ ╚═╝  ╚═╝           │
  │                                                │
  │  Versatile Engineering & General Automation    │
  │           Command Line Tool                    │
  └────────────────────────────────────────────────┘
```

![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)
![Commander.js](https://img.shields.io/badge/Commander.js-CLI-lightgrey.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

**VegaCLI** is a versatile, multi-purpose Command Line Interface (CLI) tool built with Node.js, TypeScript, and Commander.js. This tool provides a robust collection of utilities ranging from basic math operations and system diagnostics to developer tools and live API integrations, all from the comfort of your terminal.

---

## Features

* **Modular OOP Structure:** Built from the ground up with Object-Oriented TypeScript for superior type safety, scalability, and maintainability.
* **User-Friendly:** Features a simple, intuitive command structure powered by Commander.js.
* **Real-Time Data:** Seamlessly integrates with external APIs to provide live, accurate information (Weather, GitHub, Anime data).
* **Developer Friendly:** Includes handy code generation (Express boilerplate) and security utilities (Bcrypt hashing).

---

## Architecture & Object-Oriented Design

VegaCLI is structured using Object-Oriented Programming (OOP) principles in TypeScript. Instead of writing all commands in a single massive file, the CLI is broken down into modular classes. Each class is responsible for a specific domain of commands and registers them with the main `Commander` program.

### Core CLI Classes

| Class Name | Primary Responsibility | Commands Handled |
| :--- | :--- | :--- |
| `MathCommands` | Encapsulates all arithmetic logic and numeric parsing. | `add`, `sub`, `mul`, `div` |
| `UserCommands` | Manages string manipulation and user-specific greetings. | `greet`, `name` |
| `SystemCommands` | Interacts with the native OS to fetch system-level data. | `sysinfo`, `time` |
| `DevToolsCommands` | Provides utilities for local development and security. | `express-base-code`, `bcrypt-hash`, `bcrypt-compare` |
| `ApiCommands` | Handles asynchronous HTTP requests to external services using Axios. | `github`, `weather`, `quote`, `anime-char` |

### OOP Concepts Utilized

| Concept | How it is used in VegaCLI |
| :--- | :--- |
| **Encapsulation** | Each class (e.g., `MathCommands`) keeps its own methods and private variables (like the `program` instance) isolated from the rest of the app. |
| **Dependency Injection** | The core `Command` instance from Commander.js is injected into the `constructor` of each command class, making testing and modularity easier. |
| **Type Safety** | TypeScript interfaces and types are used to strictly define the shapes of API responses (e.g., GitHub user data, Weather data) and command arguments. |

---
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


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
