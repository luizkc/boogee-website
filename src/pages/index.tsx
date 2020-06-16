import React from "react"
import "../../styles/main.css"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import { At } from "../components/Card"
import QuickLink from "../components/QuickLink"

export default function Home() {
  let userChannel: At = "user"
  let cardProps = {
    title: "Moderation",
    subtitle:
      "supercharge your server with boogie’s easy to use moderation. take control of your server and make the job of your mods easy.",
    badges: ["mute", "ban", "kick", "lock"],
    command: "boo-mute",
    at: userChannel,
    booResponse: "Muted @User for 10 minutes",
    responseSubtitle: "Reason",
    responseSubitlteText: "spamming chat",
    icon: "fas fa-thumbs-up",
    iconBg: "rgb(87, 115, 211)",
  }
  let linkProps = [
    {
      icon: "fas fa-book-open",
      title: "docs/wiki",
      subtitle: "learn how to use boogie here",
      link: "https://luizkc.com",
    },
    {
      icon: "fas fa-terminal",
      title: "commands",
      subtitle: "see a list of all the commands boogie has",
      link: "https://luizkc.com",
      new: true,
    },
    {
      icon: "fas fa-columns",
      title: "dashboard",
      subtitle: "manage and configure your servers easily",
      link: "https://luizkc.com",
    },
  ]
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl">Your Discord Server’s Best Bud.</h1>
      <div className="text-center pt-4">
        <Card {...cardProps} />
      </div>
      <div className="text-center p-10">
        <Button
          text="add to discord"
          onClick={() => {
            console.log("CLICKED")
          }}
        />
      </div>
      <p className="subheader">Quick Links</p>
      {linkProps.map(link => {
        return (
          <div className=" flex flex-row justify-center py-2">
            <QuickLink {...link} />
          </div>
        )
      })}
    </div>
  )
}
