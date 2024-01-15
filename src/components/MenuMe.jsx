import React, { useState } from "react";
import "../styles/menuMe.css";

const MenuMe = ({ infoMenu }) => {
  const [activeContent, setActiveContent] = useState("about");

  const degres = infoMenu.education;

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="menuMe">
      <div className="menu flex flex-row space-x-12 font-semibold text-2xl">
        <button
          onClick={() => handleMenuClick("about")}
          className={activeContent === "about" ? "active" : "notActive"}
        >
          <h1>{infoMenu.section1}</h1>
        </button>
        <button
          onClick={() => handleMenuClick("technologies")}
          className={activeContent === "technologies" ? "active" : "notActive"}
        >
          <h1>{infoMenu.section2}</h1>
        </button>
        <button
          onClick={() => handleMenuClick("education")}
          className={activeContent === "education" ? "active" : "notActive"}
        >
          <h1>{infoMenu.section3}</h1>
        </button>
      </div>

      <div className="content">
        {activeContent === "about" && (
          <div>
            <p className="mt-8">{infoMenu.texts1}</p>
          </div>
        )}
        {activeContent === "technologies" && (
          <ul className="text-xl flex flex-row justify-center  space-x-6 mt-10">
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Front</p>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Css</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Back</p>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Spring Boot</li>
                <li>FastApi</li>
                <li>Django</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Otros</p>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Linux</li>
                <li>Hardware</li>
              </ul>
            </div>
          </ul>
        )}
        {activeContent === "education" && (
          <div className="w-full h-full flex justify-center items-center">
            <ul className=" flex flex-col space-y-4">
              {degres.map((degr, index) => (
                <li
                  key={index}
                  className="flex flex-col space-y-2 font-semibold"
                >
                  - {degr.title}
                  <span className="font-normal">{degr.institution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuMe;
