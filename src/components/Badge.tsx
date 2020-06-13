import React from "react"

interface Props {
  text: string
}

export default function Badge(props: Props) {
  return (
    <span style={{ color: "#7289DA" }} className="badge">
      {props.text}
    </span>
  )
}
