import React from "react"
import { action } from "@storybook/addon-actions"
import Button from "../../src/components/Button"
import Test from "../../src/components/Test"

export default {
  title: "Button",
  component: Button,
}

export const Text = () => (
  <div className="mx-10 my-10 text-center">
    <Button onClick={action("clicked")} text="add to discord" />
  </div>
)

export const withEmoji = () => (
  <div className="mx-10 my-10 text-center">
    <Button
      text="login"
      icon={"fab fa-discord"}
      onClick={action("icon clicked")}
    />
  </div>
)
