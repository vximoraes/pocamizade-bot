import { REST, Routes } from 'discord.js';
import { commands } from '../commands/index.js'; 
import { config } from './dotenv.js';

const rest = new REST({ version: '10' }).setToken(config.discordToken);

export async function registerCommands() {
    try {
        console.log("Registering slash commands...");
        await rest.put(
            Routes.applicationGuildCommands(config.clientId, config.guildId),
            { body: commands } 
        );
        console.log("Successfully registered slash commands.");
    } catch (error) {
        console.error("Error registering commands:", error);
    }
}