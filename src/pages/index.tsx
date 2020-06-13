import React from "react"
import "../../styles/main.css"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import Card from "../components/Card"

export default function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <Card />
      <br />
      <h1 className="text-4xl">Your Discord Server’s Best Bud.</h1>
    </div>
  )
}
