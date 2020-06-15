import React, { Component } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import propTypes from "prop-types"
type Size = "small"

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  text: string
  icon?: string
  size?: Size
}

// 1: small button with icon, 2: small button w/o icon, 3: large with icon, 4: large w/o icon

const Button = (props: Props) => {
  if (props.icon && props.size) {
    // return button with fontawesome icon
    return (
      // small w/ icon
      <>
        <button className="btn-small" onClick={props.onClick}>
          <span role="img" aria-label="icon" className="pr-1">
            <i className={props.icon}></i>{" "}
          </span>
          {props.text}
        </button>
      </>
    )
    // large w/ icon
  } else if (props.icon) {
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
  } else if (props.size) {
    return (
      <button className="btn-small rounded-full" onClick={props.onClick}>
        {props.text}
      </button>
    )
  } else {
    return (
      <button className="btn" onClick={props.onClick}>
        {props.text}
      </button>
    )
  }
}

Button.propTypes = {
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  // text: string
  // icon?: string
  // size?: Size
  onClick: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  icon: propTypes.string,
  size: propTypes.string,
}

export default Button
