import { handlers } from "../handlers/index.js";

export function interactionCreateEvent(client) {
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        const handler = handlers[interaction.commandName];
        
        if (!handler) {
            console.error(`Nenhum handler encontrado para o comando: ${interaction.commandName}`);
            return;
        }

        try {
            await handler(interaction);
        } catch (error) {
            console.error(`Erro ao executar o comando ${interaction.commandName}:`, error);
            await interaction.reply({
                content: "Desculpe, ocorreu um erro ao processar o comando.",
                ephemeral: true,
            });
        }
    });
}