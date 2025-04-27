import { Client, GatewayIntentBits } from "discord.js";
import { registerCommands } from "./config/registerCommands.js";
import { registerEvents } from "./events/index.js";
import { config } from "./config/dotenv.js";

// Inicializa o cliente do Discord
export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ],
});

// Registra eventos
registerEvents(client);

// Registra comandos no Discord
registerCommands();

// Faz login no Discord
client.login(config.discordToken);