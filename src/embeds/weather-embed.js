import { EmbedBuilder } from "discord.js";
import { getWeather } from "../weather-api.js";

export async function weatherEmbed(city) {
  try {
    const weather = await getWeather(city);

    const embedWeather = new EmbedBuilder()
      .setTitle(`Clima em ${city}, ${weather.region}`)
      .setDescription(`Última atualização: ${weather.last_updated}`)
      .setColor(0x0099ff)
      .setThumbnail(`https:${weather.icon}`)
      .addFields([
        {
          name: "Temperatura",
          value: weather.temperature + "°C",
          inline: true,
        },
        {
          name: "Sensação Térmica",
          value: weather.feelsLike + "°C",
          inline: true,
        },
        {
          name: "Condição",
          value: weather.condition,
          inline: true,
        },
      ]);

    return embedWeather;
  } catch (error) {
    console.error("Erro ao obter o clima:", error);
    throw new Error(
      `Desculpe, não consegui obter o clima para a cidade ${city}.`
    );
  }
}