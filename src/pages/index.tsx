import React from "react"
import "../../styles/main.css"
import Button from "../components/Button"

export default function Home() {
  return (
    <div>
      <h1>boogee</h1>
      <Button text="Yep" icon="fas fa-rocket" onClick={() => console.log("clicked")} />
    </div>
  )
}
