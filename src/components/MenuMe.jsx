import React, { useState } from "react";
import "../styles/menuMe.css";

const MenuMe = ({infoMenu}) => {
  const [activeContent, setActiveContent] = useState("about");

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="menuMe border">
      <div className="menu flex flex-row space-x-12 font-semibold text-2xl">
        <button onClick={() => handleMenuClick("about")} className={activeContent === 'about' ? "active" : 'notActive'}><h1>{infoMenu.section1}</h1></button>
        <button onClick={() => handleMenuClick("technologies")} className={activeContent === 'technologies' ? 'active' : 'notActive'}>
          <h1>{infoMenu.section2}</h1> 
        </button>
      </div>
      <div className="content">
        {activeContent === "about" && (
            <div>
          <p className="mt-8">
            {infoMenu.texts1}
          </p>
            </div>
        )}
        {activeContent === "technologies" && (
          <ul className="text-xl flex flex-row justify-evenly items-center mt-10">
            <div className="flex flex-col">
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="pr-4 w-10 h-10"
                />
                React
              </li>
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  className="pr-4 w-10 h-10"
                />
                Java
              </li>
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  className="pr-4 w-10 h-10"
                />
                JavaScript
              </li>
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="pr-4 w-10 h-10"
                />
                Python
              </li>
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                  className="pr-4 w-10 h-10"
                />
                Django
              </li>
            </div>
            <div className="flex flex-col">
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  className="pr-4 w-10 h-10"
                />
                Docker
              </li>
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                  className="pr-4 w-10 h-10"
                />
                Spring
              </li>
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                  className="pr-4 w-10 h-10"
                />
                Tailwind
              </li>
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  className="pr-4 w-10 h-10"
                />
                Git
              </li>
              <li className="flex">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  className="pr-4 w-10 h-10"
                />
                Linux
              </li>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MenuMe;
