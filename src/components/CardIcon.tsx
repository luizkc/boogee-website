import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"

interface Props {
  icon: string
  size?: "small" | "tiny"
  background: string
}

export default function CardIcon(props: Props) {
  if (props.icon === "🐶") {
    if (props.size === "small") {
      return (
        <button
          disabled={true}
          style={{ background: props.background }}
          className="w-12 h-12 text-white rounded-full cursor-default"
        >
          <span role="img" aria-label="icon" className="text-2xl">
            🐶
          </span>
        </button>
      )
    } else {
      return (
        <button
          disabled={true}
          style={{ background: props.background }}
          className="w-16 h-16 text-white rounded-full cursor-default"
        >
          <span role="img" aria-label="icon" className="text-2xl">
            🐶
          </span>
        </button>
      )
    }
  }
  if (props.size === "tiny") {
    return (
      <button
        disabled={true}
        style={{ background: props.background }}
        className="w-10 h-10 text-white rounded-full cursor-default"
      >
        <span role="img" aria-label="icon">
          <i
            style={{ fontSize: "36px", color: "#e8eeff" }}
            className={props.icon}
          ></i>
        </span>
      </button>
    )
  }
  if (props.size === "small") {
    // return small icon
    return (
      <button
        disabled={true}
        style={{ background: props.background }}
        className="w-12 h-12 text-white rounded-full cursor-default"
      >
        <span role="img" aria-label="icon">
          <i style={{ color: "#e8eeff" }} className={props.icon + " fa-lg"}></i>
        </span>
      </button>
    )
  } else {
    return (
      <button
        disabled={true}
        style={{ background: props.background }}
        className="w-16 h-16 text-white rounded-full cursor-default"
      >
        <span role="img" aria-label="icon">
          <i style={{ color: "#e8eeff" }} className={props.icon + " fa-2x"}></i>
        </span>
      </button>
    )
  }
}
