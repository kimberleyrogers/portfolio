import React from "react";
import { App } from "./App";
import "./Menu.css"

// CREDIT: This Menu feature is from this tutorial: https://www.youtube.com/watch?v=hANR2XbB9co
// Thank you DevLHB

function Menu({ isOpen, onChange }) {

  const links = [
    {itemText: "home", itemLink: "/"},
    {itemText: "about", itemLink: "#about-section"},
    {itemText: "projects", itemLink: "#project-section"},
    {itemText: "skills", itemLink: "#skills-section"},
  ]
  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
          X
      </span>
      <div className="Menu-items">
        {links.map((link, index) => (
          <a  href={link.itemLink} key={index} onClick={() => onChange(false)}>
            {link.itemText}
          </a>
        ))}
      </div>
      
    </div>
  );
}

export default Menu;