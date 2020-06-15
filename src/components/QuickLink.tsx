import React from "react"
import CardIcon from "./CardIcon"

interface Props {
  icon: string
  title: string
  subtitle: string
  link: string
  new?: boolean
}

export default function quickLink({ ...props }: Props) {
  return (
    <a href={props.link} target={props.new ? "_blank" : ""}>
      <div className="quick-link-top">
        <div className="flex items-center">
          <div className="text-md flex items-center align-middle">
            <div className="ml-2">
              <CardIcon
                icon={props.icon}
                background="transparent"
                size="tiny"
              />
            </div>
            <p className="header leading-none pl-2">{props.title}</p>
          </div>
        </div>
      </div>
      <div className="quick-link-bottom">
        <p className="quick-link-sub ml-2 py-1">{props.subtitle}</p>
      </div>
    </a>
  )
}
