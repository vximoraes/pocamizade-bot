import dotenv from 'dotenv';
import { REST, Routes, ApplicationCommandOptionType,  } from 'discord.js';

dotenv.config()
const commands = [
    {
        name: "clima",
        description: "mostra o clima de uma cidade",
        options: [
            {
                name: "cidade",
                description: "nome da cidade",
                type: ApplicationCommandOptionType.String, // STRING
                required: true,
            },
        ],
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
  export async function registerCommands() {
    try {
        console.log("Registering slash commands...");
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );
        console.log("Successfully registered slash commands.");
    } catch (error) {
        console.error("Error registering commands:", error);
    }
};
