import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"

interface Props {
  icon: string
}

export default function CardIcon(props: Props) {
  return (
    <button
      disabled={true}
      className="w-16 h-16 bg-blue-600 text-white rounded-full cursor-default"
    >
      <span role="img" aria-label="icon">
        <i className={props.icon + " fa-2x"}></i>
      </span>
    </button>
  )
}
