export function readyEvent(client) {
    client.once("ready", () => {
        console.log(`Bot está online como ${client.user.tag}`);
    });
}