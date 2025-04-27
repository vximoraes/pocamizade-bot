import { EmbedBuilder } from "discord.js";

export function rickrollEmbed() {
    const embedRickRoll = new EmbedBuilder()
        .setTitle("Never Gonna Give You Up")
        .setColor(0xff0000)
        .setImage("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExang4bHp2aW9oNXJuNWp0eTNkdmRvN2VwbXExbnZjY2RvZmJlNnp1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif"); 

    return embedRickRoll;
}