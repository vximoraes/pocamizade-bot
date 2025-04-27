import { readyEvent } from "./ready.js";
import { interactionCreateEvent } from "./interactionCreate.js";

export function registerEvents(client) {
    readyEvent(client);
    interactionCreateEvent(client);
}