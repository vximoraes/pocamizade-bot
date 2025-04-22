import { client } from "./index.js";
import { EmbedBuilder } from "discord.js";
import { getWeather} from "./weather-api.js";

 export async function callCommands (){
    client.on('interactionCreate', (interaction) => {
        // Verifica se a interação é um comando
        if(!interaction.isChatInputCommand) return;
        console.log('Comando recebido:', interaction.commandName);
        // Verifica se o comando é o "ping"
        if(interaction.commandName === 'ping') {
        }
        // Verifica se o comando é o "chamar"
        if(interaction.commandName === 'chamar') {
          interaction.reply('Chamando viados! @everyone');
        }
        // Verifica se o comando é o "clima"
        if(interaction.commandName === 'clima') {
          let city = interaction.options.get('cidade').value;
          city = city.charAt(0).toUpperCase() + city.slice(1);
          getWeather(city).then((weather) => {
            const embedWeather = new EmbedBuilder()
              .setTitle(`Clima em ${city}, ${weather.region}`)
              .setDescription(`Última atualização: ${weather.last_updated}`)
              .setColor(0x0099FF)
              .setThumbnail(`https:${weather.icon}`)
              .addFields([
                {
                  name: 'Temperatura',
                  value: weather.temperature + '°C',
                  inline: true,
                },
                {
                  name: 'Sensação Térmica',
                  value: weather.feelsLike + '°C',
                  inline: true,
                },
                {
                  name: 'Condição',
                  value: weather.condition,
                  inline: true,
                }
              ]);
              interaction.reply({embeds: [embedWeather]});
          })
          .catch((error) => {
            console.error('Erro ao obter o clima:', error);
            interaction.reply(`Desculpe, não consegui obter o clima para a cidade ${city}.`);
          });
        }
    });
}

