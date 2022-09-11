import React from "react";
import { App } from "./App";
// import { items } from "./MenuItems";
import "./Menu.css"

function Menu({ isOpen, onChange }) {

  const links = [
    {itemText: "HOME", itemLink: "/"},
    {itemText: "SKILLS", itemLink: "#skills-section"},
    {itemText: "PROJECTS", itemLink: "#project-section"},
    {itemText: "ABOUT", itemLink: "#about-section"},
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
          <a href={link.itemLink} key={index}>
            {link.itemText}
          </a>
        ))}
      </div>
      
    </div>
  );
}

export default Menu;