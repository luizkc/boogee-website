import React from "react"
import { action } from "@storybook/addon-actions"
import Button from "../../src/components/Button"
import Test from "../../src/components/Test"

export default {
  title: "Button",
  component: Button,
}

export const largeText = () => (
  <div className="mx-10 my-10 text-center">
    <Button onClick={action("clicked")} text="add to discord" />
  </div>
)

export const largeTextIcon = () => (
  <div className="mx-10 my-10 text-center">
    <Button
      text="login"
      icon={"fab fa-discord"}
      onClick={action("icon clicked")}
    />
  </div>
)

export const smallText = () => (
  <div className="mx-10 my-10 text-center">
    <Button size="small" onClick={action("clicked")} text="add to discord" />
  </div>
)

export const smallTextIcon = () => (
  <div className="mx-10 my-10 text-center">
    <Button
      text="login"
      size="small"
      icon={"fab fa-discord"}
      onClick={action("icon clicked")}
    />
  </div>
)
