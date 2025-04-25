import dotenv from 'dotenv';

dotenv.config();

export const config = {
    discordToken: process.env.DISCORD_TOKEN,
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
    weatherApiKey: process.env.WEATHER_API_KEY,
};