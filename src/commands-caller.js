import { client } from "./index.js";
import { getWeather} from "./weather-api.js";

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
        // Verifica se o comando é o "clima"
        if(interaction.commandName === 'clima') {
            const cidade = interaction.options.get('cidade');
            
            console.log('Cidade recebida:', cidade);
            interaction.reply(`Buscando clima para a cidade: ${cidade.value}`);

            console.log(getWeather().then((weather) => {
                interaction.followUp(`O clima em ${cidade.value} é: ${weather.condition} com temperatura de ${weather.temperature}°C e sensação térmica de ${weather.feelslike}°C. Atualizado em: ${weather.last_updated}.`);
            }));
        }
    
    });
}