import React from "react"
import { action } from "@storybook/addon-actions"
import Card from "../../src/components/Card"

export default {
  title: "CardIcon",
  component: Card,
}

export const card = () => {
  return (
    <div className="mx-10 my-10 text-center">
      <Card />
    </div>
  )
}
