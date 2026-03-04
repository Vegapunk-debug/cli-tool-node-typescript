import axios from "axios"

export class ApiService {

    public static async getGithub(username: string) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(`\n--- GitHub User: ${response.data.login} ---`)
            console.log(`Name: ${response.data.name || "N/A"}`)
            console.log(`Followers: ${response.data.followers}`)
            console.log(`Repositories: ${response.data.public_repos}\nBio: ${response.data.bio || "N/A"}\nProfile URL: ${response.data.html_url}\n`)
        }
        catch (error: any) {
            console.log("Error: Could not find user.", error.message)
        }
    }

    public static async getWeather(city: string) {
        try {
            const response = await axios.get(`https://wttr.in/${city}?format=3`)
            console.log(`\n Weather of ${city}: ${response.data}`)
        }
        catch (error: any) {
            console.log("\n Error: Could not fetch weather.\n", error.message)
        }
    }

    public static async getQuote() {
        try {
            const response = await axios.get("https://dummyjson.com/quotes/random")
            console.log(`\n "${response.data.quote}"\n — ${response.data.author}\n`)
        }
        catch (error: any) {
            console.log("\n Error: Could not fetch a quote.\n", error.message)
        }
    }

    public static async getAnimeChar(name: string) {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/characters?q=${name}&limit=1`);
            const character = response.data.data[0];
            console.log(`\n --- ${character.name} ---`);
            console.log(`About: ${character.about ? character.about.substring(0, 200) + '...' : 'No bio available.'}`)
        }
        catch (error: any) {
            console.log("\n Error: Could not find that character.\n")
        }
    }
}