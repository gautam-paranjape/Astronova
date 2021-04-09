import { Event } from "../../structures/Event";

const ReadyEvent: Event = {
  name: "ready",
  run(client, message, args) {
    console.log("ready");
  },
};

export = ReadyEvent;