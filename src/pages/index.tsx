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
  let linkProps = {
    icon: "fas fa-book-open",
    title: "docs/wiki",
    subtitle: "learn how to sue boogie here",
  }
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl">Your Discord Server’s Best Bud.</h1>
      <div
        className="pt-4"
        style={{ marginLeft: "15%", marginRight: "15%", maxWidth: "710px" }}
      >
        <Card {...cardProps} />
      </div>
      <div className="text-center p-10">
        <Button
          text="add to discord"
          onClick={() => {
            console.log("CLICKED")
          }}
        />
        <p className="subheader">Quick Links</p>
      </div>
      <QuickLink {...linkProps} />
    </div>
  )
}
