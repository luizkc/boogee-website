import React from "react"
import CardIcon from "./CardIcon"
import Button from "./Button"
import Badge from "./Badge"

export type At = "user" | "channel"

interface Props {
  title: string
  subtitle: string
  badges: string[]
  command: string
  at: At
  booResponse: string
  responseSubtitle: string
  responseSubitlteText: string
  icon: string
  iconBg: string
}

export default function Card({ ...props }: Props) {
  let tag
  if (props.at === "user") tag = "@User"
  else tag = "#channel"
  return (
    <div className="inline-block text-left md:w-3/4 w-4/5 lg:w-3/5">
      <div
        className="bg-gradient light md:max-w-full md:flex lg:max-w-full lg:flex border-radius: 12px;"
        style={{ borderRadius: "12px" }}
      >
        <div
          style={{ borderRadius: "12px", background: "transparent" }}
          className="md:w-2/5 lg:border-l-0 bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal"
        >
          <div className="flex items-center">
            <div className="text-md flex items-center">
              <CardIcon icon={props.icon} background={props.iconBg} />
              <p className="header leading-none pl-2">{props.title}</p>
            </div>
          </div>
          <div style={{ paddingTop: "1px" }}>
            <p className="pb-4">{props.subtitle}</p>
            <p
              className="text-sm"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              commands included
            </p>
            <div className="pb-2 pt-2">
              {props.badges.map(badge => {
                return <Badge text={badge} key={badge} />
              })}
            </div>
            <p
              className="text-sm pb-5"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              and many more...
            </p>
            <Button
              size="small"
              text="learn more"
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(101.53deg, #4158ac 3.25%, #869ae2 118.58%)",
            borderRadius: "13px",
          }}
          className="md:w-3/5 lg:w-3/5 border-r border-b lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal border-transparent"
        >
          <div>
            <div className="text-md flex items-center md:pt-10 ">
              <CardIcon
                size="small"
                icon="fas fa-user"
                background="rgb(87, 115, 211)"
              />
              <p className="pl-2 leading-none">Admin</p>
            </div>
            <p className="at-user">
              {props.command} <span className="at-user-text">{tag}</span>
            </p>
          </div>
          <div>
            <div className="text-md flex items-center pt-6">
              <CardIcon icon="🐶" size="small" background="rgb(87, 115, 211)" />
              <p className="pl-2 leading-none">
                Boogie <span className="bot-badge">BOT</span>
              </p>
            </div>
            <div className="p-2" style={{ paddingLeft: "55px" }}>
              <div
                style={{ background: "#5773d3", borderRadius: "16px" }}
                className="rounded-lg p-4"
              >
                <p className="text-md">
                  <b>
                    <span>🐶</span> {props.booResponse}
                  </b>
                </p>
                <p className="text-sm" style={{ color: "#c5c5c5" }}>
                  {props.responseSubtitle}
                </p>
                <p className="text-sm">{props.responseSubitlteText}</p>
              </div>
            </div>
            <div
              className="mt-4"
              style={{ background: "#7289da", borderRadius: "12px" }}
            >
              <p className="pl-4">message...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
