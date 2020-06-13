import React from "react"
import { action } from "@storybook/addon-actions"
import CardIcon from "../../src/components/CardIcon"

export default {
  title: "CardIcon",
  component: CardIcon,
}

export const cardIcon = () => {
  return (
    <div className="mx-10 my-10 text-center">
      <CardIcon icon={"fab fa-discord"} />
    </div>
  )
}
