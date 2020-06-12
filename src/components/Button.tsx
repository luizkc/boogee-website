import React, { Component } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  text: string
  icon?: string
}

const Button = (props: Props) => {
  if (props.icon) {
    // return button with fontawesome icon
    return (
      <>
        <button className="btn" onClick={props.onClick}>
          <span role="img" aria-label="icon" className="pr-1">
            <i className={props.icon}></i>{" "}
          </span>
          {props.text}
        </button>
      </>
    )
  } else {
    return (
      <button className="btn btn-blue" onClick={props.onClick}>
        {props.text}
      </button>
    )
  }
}

export default Button
