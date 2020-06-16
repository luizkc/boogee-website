import React from "react"
import Button from "./Button"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="navbar-expand-lg">
        <div className="container nav-container">
          <div className="nav-brand-container">
            <a className="nav-brand-text" style={{ fontSize: 36 }} href="#">
              boogie
            </a>
            <button
              className="nav-stack"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="nav-links-container">
              <li className="lg:px-2 lg:py-5 lg:mx-10 lg:flex lg:items-center lg:text-xs lg:leading-snug font-semibold lg:text-2xl text-2xl lg:opacity-100">
                <a href="#">
                  <span className="ml-2">pricing</span>
                </a>
              </li>
              <li className="lg:px-2 lg:py-5 lg:mx-10 lg:flex lg:items-center lg:text-xs lg:leading-snug font-semibold lg:text-2xl text-2xl lg:opacity-100">
                <a href="#">
                  <span className="ml-2">docs</span>
                </a>
              </li>
              <li className="xs:pt-3 lg:px-2 lg:py-5 lg:mx-10 lg:flex lg:items-center lg:text-xs lg:leading-snug font-semibold lg:text-2xl text-2xl lg:opacity-100">
                <a href="#">
                  <span className="ml-2">commands</span>
                </a>
              </li>
              <li className="pt-3 py-5">
                <a href="#">
                  <Button
                    onClick={() => console.log("clicked")}
                    text="log in"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
