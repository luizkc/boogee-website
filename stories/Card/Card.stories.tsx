import React from "react"
import Card from "../../src/components/Card"
import { At } from "../../src/components/Card"
export default {
  title: "Card",
  component: Card,
}
let user: At = "user"
let channel: At = "channel"
const cardData = [
  {
    title: "Moderation",
    subtitle:
      "supercharge your server with boogie’s easy to use moderation. take control of your server and make the job of your mods easy.",
    badges: ["mute", "ban", "kick", "lock"],
    command: "boo-mute",
    at: user,
    booResponse: "Muted @User for 10 minutes",
    responseSubtitle: "Reason",
    responseSubitlteText: "spamming chat",
    icon: "fas fa-thumbs-up",
    iconBg: "rgb(87, 115, 211)",
  },
  {
    title: "Giveaways",
    subtitle:
      "Host contests and giveaways for your members and make your server more fun!",
    badges: ["create", "reroll", "blacklist", "end"],
    command: "boo-giveaways 24h $20 gift card",
    at: channel,
    booResponse: "Your giveaway for $20 gift card has started in #channel",
    responseSubtitle: "Duration",
    responseSubitlteText: "24 hours",
    icon: "fas fa-gift",
    iconBg: "rgb(87, 115, 211)",
  },
]
export const moderation = () => {
  return (
    <div className="mx-10 my-10">
      <Card {...cardData[0]} />
    </div>
  )
}

export const giveaways = () => {
  return (
    <div className="mx-10 my-10">
      <Card {...cardData[1]} />
    </div>
  )
}
