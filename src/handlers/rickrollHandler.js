import { rickrollEmbed } from "../embeds/rickrollEmbed.js";

export async function rickrollHandler(interaction) {
    try {
        const embed = rickrollEmbed();
        await interaction.reply({ embeds: [embed] });
    } catch (error) {
        console.error("Erro ao processar o comando rickroll:", error);
        await interaction.reply({
            content: "Desculpe, ocorreu um erro ao enviar o Rick Roll.",
            ephemeral: true,
        });
    }
}