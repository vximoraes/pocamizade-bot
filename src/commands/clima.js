import { ApplicationCommandOptionType } from 'discord.js';

export const clima = {
    name: "clima",
    description: "Mostra o clima de uma cidade específica",
    options: [
        {
            name: "cidade",
            description: "nome da cidade",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
};