import{r as d}from"./index.ed373d49.js";import{s as a}from"./index.3b752cae.524b1d4f.js";var m={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=d,p=Symbol.for("react.element"),h=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,j=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function v(n,s,o){var i,c={},r=null,t=null;o!==void 0&&(r=""+o),s.key!==void 0&&(r=""+s.key),s.ref!==void 0&&(t=s.ref);for(i in s)g.call(s,i)&&!f.hasOwnProperty(i)&&(c[i]=s[i]);if(n&&n.defaultProps)for(i in s=n.defaultProps,s)c[i]===void 0&&(c[i]=s[i]);return{$$typeof:p,type:n,key:r,ref:t,props:c,_owner:j.current}}l.Fragment=h;l.jsx=v;l.jsxs=v;m.exports=l;var e=m.exports;const y=()=>{const[n,s]=d.useState("about"),o=i=>{s(i)};return e.jsxs("div",{className:a.menuMe,children:[e.jsxs("div",{className:"menu flex flex-row space-x-12 font-semibold text-2xl",children:[e.jsx("button",{onClick:()=>o("about"),className:n==="about"?a.active:"",children:"Sobre Mí"}),e.jsx("button",{onClick:()=>o("technologies"),className:n==="technologies"?a.active:"",children:"Tecnologías"})]}),e.jsxs("div",{className:a.content,children:[n==="about"&&e.jsx("div",{children:e.jsx("p",{className:"mt-8",children:"Hola, soy Dario. Mi pasión es la tecnología y el aprendizaje. Desde pequeño, me he sentido fascinado por cómo la tecnología cambia el mundo. Siempre estoy buscando aprender algo nuevo, ya sea desmontando dispositivos o tomando cursos en línea. Creo que el aprendizaje constante es esencial para crecer. Mi objetivo es seguir explorando el mundo de la tecnología y compartir mis conocimientos con otros apasionados por el tema. ¡Conéctate conmigo si compartes estos intereses!"})}),n==="technologies"&&e.jsxs("ul",{className:"text-xl flex flex-row justify-evenly items-center mt-10",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",className:"pr-4 w-10 h-10"}),"React"]}),e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",className:"pr-4 w-10 h-10"}),"Java"]}),e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",className:"pr-4 w-10 h-10"}),"JavaScript"]}),e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",className:"pr-4 w-10 h-10"}),"Python"]}),e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",className:"pr-4 w-10 h-10"}),"Django"]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",className:"pr-4 w-10 h-10"}),"Docker"]}),e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",className:"pr-4 w-10 h-10"}),"Spring"]}),e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",className:"pr-4 w-10 h-10"}),"Tailwind"]}),e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",className:"pr-4 w-10 h-10"}),"Git"]}),e.jsxs("li",{className:"flex",children:[e.jsx("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",className:"pr-4 w-10 h-10"}),"Linux"]})]})]})]})]})};export{y as default};