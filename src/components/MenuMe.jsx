import React, { useState } from "react";
import styles from "../styles/menuMe.module.css";

const MenuMe = () => {
  const [activeContent, setActiveContent] = useState("about");

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className={styles.menuMe}>
      <div className="menu flex flex-row space-x-12 font-semibold text-2xl">
        <button onClick={() => handleMenuClick("about")} className={activeContent === 'about' ? styles.active : ''}>Sobre Mí</button>
        <button onClick={() => handleMenuClick("technologies")} className={activeContent === 'technologies' ? styles.active : ''}>
          Tecnologías
        </button>
      </div>
      <div className={styles.content}>
        {activeContent === "about" && (
            <div>
          <p className="mt-8">
            Hola, soy Dario. Mi pasión es la tecnología y el aprendizaje. Desde
            pequeño, me he sentido fascinado por cómo la tecnología cambia el
            mundo. Siempre estoy buscando aprender algo nuevo, ya sea
            desmontando dispositivos o tomando cursos en línea. Creo que el
            aprendizaje constante es esencial para crecer. Mi objetivo es seguir
            explorando el mundo de la tecnología y compartir mis conocimientos
            con otros apasionados por el tema. ¡Conéctate conmigo si compartes
            estos intereses!
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
