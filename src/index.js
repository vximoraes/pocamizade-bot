import dotenv from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js'
import { registerCommands } from './register-commands.js'
import { callCommands } from './commands-caller.js'

dotenv.config()

 export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ]
})

client.login(process.env.DISCORD_TOKEN)
registerCommands();
callCommands();




/*client.on("messageCreate", async (message) => {  
    console.log('Mensagem recebida:', message.content)  
    if (message.author.bot) return;
    if (message.content === '!') {  
        try {  
            await message.channel.send(`Última mensagem enviada: ${message.content}`)  
        } catch (error) {  
            console.error('Erro ao enviar mensagem:', error)  
        }  
    }  
})  */
