import React from "react"
import { action } from "@storybook/addon-actions"
import QuickLink from "../../src/components/QuickLink"
import Test from "../../src/components/Test"

export default {
  title: "Links",
  component: QuickLink,
}

const data = [
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

export const Docs = () => {
  return (
    <div className="mx-10 my-10">
      <QuickLink {...data[0]} />
    </div>
  )
}
export const Commands = () => {
  return (
    <div className="mx-10 my-10">
      <QuickLink {...data[1]} />
    </div>
  )
}
export const Dashboard = () => {
  return (
    <div className="mx-10 my-10">
      <QuickLink {...data[2]} />
    </div>
  )
}
