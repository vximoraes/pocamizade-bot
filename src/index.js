import { Client, GatewayIntentBits } from 'discord.js';
import { registerCommands } from './config/registerCommands.js'; 
import { callCommands } from './utils/commandsCaller.js';
import { readyEvent } from './events/ready.js'; 
import { config } from './config/dotenv.js'; 

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

readyEvent(client);

registerCommands();

callCommands();

client.login(config.discordToken);