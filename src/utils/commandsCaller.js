import { client } from "../index.js";
import { weatherEmbed } from "../embeds/climaEmbed.js";

export async function callCommands() {
  client.on("interactionCreate", async (interaction) => {
    // Verifica se a interação é um comando
    if (!interaction.isChatInputCommand) return;
    console.log("Comando recebido:", interaction.commandName);

    // Verifica se o comando é o "clima"
    if (interaction.commandName === "clima") {
      //coloca a primeira letra em maisculo para a API entender
      let city = interaction.options.get("cidade").value;
      city = city.charAt(0).toUpperCase() + city.slice(1);

      try {
        const embed = await weatherEmbed(city); // Chama a função weatherEmbed passando a cidade
        interaction.reply({ embeds: [embed] });
      } catch (error) {
        console.error("Erro ao responder ao comando clima:", error);
        interaction.reply({
          content: "Desculpe, ocorreu um erro ao obter o clima.",
        });
      }
    }
  });
}