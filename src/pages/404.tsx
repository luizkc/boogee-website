import React from "react"
import "../../styles/main.css"
import Button from "../components/Button"

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Your Discord Server’s Best Bud.</h1>
      <Button text="log in" onClick={() => console.log("clicked")} />
    </div>
  )
}
