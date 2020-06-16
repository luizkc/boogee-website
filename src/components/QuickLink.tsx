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
    <div className="quick-link-container">
      <a href={props.link} target={props.new ? "_blank" : ""}>
        <div className="quick-link-top">
          <div className="flex items-center">
            <div className="text-md flex items-center align-middle">
              <div className="ml-2">
                <CardIcon
                  icon={props.icon}
                  background="transparent"
                  size="tiny"
                  hover={true}
                />
              </div>
              <span className="quick-link-title">{props.title}</span>
            </div>
          </div>
        </div>
        <div className="quick-link-bottom">
          <p className="quick-link-sub ml-2 py-1">{props.subtitle}</p>
        </div>
      </a>
    </div>
  )
}
