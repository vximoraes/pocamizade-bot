import { client } from "./index.js";

 export async function callCommands (){
    client.on('interactionCreate', (interaction) => {
        // Verifica se a interação é um comando
        if(!interaction.isChatInputCommand) return;
        console.log('Comando recebido:', interaction.commandName);
        // Verifica se o comando é o "ping"
        if(interaction.commandName === 'ping') {
          interaction.reply('Pong!');
        }
        // Verifica se o comando é o "chamar"
        if(interaction.commandName === 'chamar') {
          interaction.reply('Chamando viados! @everyone');
        }

        if(interaction.commandName === 'clima') {
            const cidade = interaction.options.get('cidade');
            console.log('Cidade recebida:', cidade);
        }
        
      });
}