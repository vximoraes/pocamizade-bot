import { weatherEmbed } from "../embeds/climaEmbed.js";

export async function climaHandler(interaction) {
    let city = interaction.options.get("cidade").value;
    city = city.charAt(0).toUpperCase() + city.slice(1); // Capitaliza a cidade

    try {
        const embed = await weatherEmbed(city);
        await interaction.reply({ embeds: [embed] });
    } catch (error) {
        console.error("Erro ao processar o comando clima:", error);
        await interaction.reply({
            content: "Desculpe, ocorreu um erro ao obter o clima.",
            ephemeral: true,
        });
    }
}