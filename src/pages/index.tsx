import React from "react"
import "../../styles/main.css"
import Button from "../components/Button"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl">Your Discord Server’s Best Bud.</h1>
    </div>
  )
}
