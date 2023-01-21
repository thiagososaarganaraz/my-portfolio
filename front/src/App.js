import React, { useState, useEffect } from "react";
import "./app.css";
import noBackgroundLogo from "./assets/png/logo-no-background.png";
import logoBlack from "./assets/png/logo-black.png";
import logoWhite from "./assets/png/logo-white.png";
import project1 from "./assets/projects/Ecommerce.jpg";
import project2 from "./assets/projects/wcweb.png";
import project3 from "./assets/projects/colibriweb.png";
import englishCv from "./assets/docs/cvEnglish.pdf";
import spanishCv from "./assets/docs/cvSpanish.pdf";
import sequelizeIcon from "./assets/icons/svg/sequelizeIcon.svg";
import postgresIcon from "./assets/icons/png/postgres.png";
import muiIcon from "./assets/icons/png/mui.png";
import styledcoIcon from "./assets/icons/png/styledco.png";

function App() {
  const [spanish, setSpanish] = useState(true);

  const handleSelect = (e) => {
    setSpanish(!spanish);
  };

  useEffect(() => {}, [spanish]);

  return (
    <div className="container">
      <header>
        <nav>
          <div className="left-side-nav">
            <a href="#">
              <img src={logoWhite} />
            </a>
          </div>
          <div className="right-side-nav">
            <ul>
              <li>
                <a href="#stack">Stack</a>
              </li>
              <li>
                <a href="#projects">{spanish ? "Proyectos" : "Projects"}</a>
              </li>
              <li>
                <a href="#about">{spanish ? "About" : "About"}</a>
              </li>
              <li>
                <a href="#contact">{spanish ? "Contacto" : "Contact"}</a>
              </li>
              <li>
                <select onChange={handleSelect}>
                  <option value={true}>Spanish</option>
                  <option value={false}>English</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-one">
            <h1>
              {spanish
                ? "Hola! Mi nombre es Thiago"
                : "Hi there! My name is Thiago"}
            </h1>
          </div>
          <div className="hero-two">
            <h1>
              {spanish
                ? "Soy desarrollador Fullstack"
                : "I'm a Fullstack Developer"}
            </h1>
          </div>
        </div>
      </header>
      <div className="body-container">
        <section id="stack" className="stack">
          <h1>Stack</h1>
          <h3>
            {spanish
              ? "Hacé click en los botones del stack para encenderlos!"
              : "Click on the stack buttons to turn them on!"}
          </h3>
          <ul>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-html5"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-square-js"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-react"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-node"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>C#</div>
            </li>
            <li>
              <input type="checkbox" />
              <div className="sql">SQL</div>
            </li>
          </ul>
          <ul className="not-lighted">
            <li>
              <div>
                <img src={sequelizeIcon} />
              </div>
            </li>
            <li>
              <div className="express">express</div>
            </li>
            <li>
              <div>
                <img src={postgresIcon} />
              </div>
            </li>
            <li>
              <div>
                <img src={muiIcon} />
              </div>
            </li>
            <li>
              <div>
                <img src={styledcoIcon} />
              </div>
            </li>
          </ul>
          {/* <ul>
            <li>
              <i className="fa-brands fa-html5"></i>
            </li>
            <li>
              <i className="fa-brands fa-css3-alt"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-js"></i>
            </li>
            <li>
              <i className="fa-brands fa-react"></i>
            </li>
            <li>
              <i className="fa-brands fa-node"></i>
            </li>
            <li>
              <img src={sqlIcon} alt="sql icon" />
            </li>
            <li>
              <img src={sharpIcon} alt="c sharp icon " />
            </li>
          </ul> */}
        </section>
        <section id="projects" className="projects">
          <h1>{spanish ? "Proyectos" : "Projects"}</h1>
          <div className="projects-wrapper">
            <div className="projects-card">
              <h2>{spanish ? "Punto de Venta" : "Sell Point"}</h2>
              <div className="project-info">
                <div className="project-slider">
                  <img src={project1} alt="sell point developed in C#" />
                </div>
                <p>
                  {spanish
                    ? "Aplicacion de escritorio para negocios con control de stock, control de usuarios y administradores. Desarrollada en C# con base de datos en SQL Server."
                    : "Desktop aplication designed for stores, with stock control, user and admin control. Developed in C# and using SQL Server as Database."}
                </p>
              </div>
              <a href="#">{spanish ? "Ver más" : "View More"}</a>
            </div>
            <div className="projects-card">
              <h2>WorldCup Qatar 2022 Stats Webpage</h2>
              <div className="project-info">
                <div className="project-slider">
                  <img src={project2} alt="world cup page project" />
                </div>
                <p>
                  {spanish
                    ? "Pagina web de datos en tiempo real del mundial Qatar 2022. Los datos son extraidos de una API, desarrollado con HTML, CSS, JS, React y NodeJS con ExpressJS."
                    : "Qatar Worldcup real-time stats webpage. Data is extracted from an API. It is developed in HTML, CSS, JS, React and NodeJS with ExpressJS."}
                </p>
              </div>
              <a href="#">{spanish ? "Ver más" : "View More"}</a>
            </div>
            <div className="projects-card">
              <h2>
                {spanish
                  ? "Tienda de ropa Colibri (Ecommerce)"
                  : "Colibri Web Store (Ecommerce)"}
              </h2>
              <div className="project-info">
                <div className="project-slider">
                  <img src={project3} alt="colibri web store" />
                </div>
                <p>
                  {spanish
                    ? "Ecommerce para una tienda de venta de ropa sublimada. Desarrollado en Javascript, con React y Redux para el frontend, Node js, Express Sequelize y Postgres para el backend."
                    : "Sublimated clothes store Ecommerce. Developed in Javascript, with React and Redux for the frontend, and Node, Express, Sequelize and Postgres for the backend."}
                </p>
              </div>
              <a href="#">{spanish ? "Ver más" : "View More"}</a>
            </div>
          </div>
        </section>
        <section id="education" className="education">
          <h1>{spanish ? "Educación" : "Education"}</h1>
          <h2>
            {spanish
              ? "Toca las tarjetas para ver más información"
              : "Touch the cards to see more info"}
          </h2>
          <div className="education-wrapper">
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-school"></i>
                  <h3>
                    {!spanish
                      ? "Personal and Professional Computer Technician"
                      : "Técnico en Computación Profesional y Personal"}
                  </h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-school"></i>
                  <h3>
                    {spanish
                      ? 'Escuela Técnica "Hilda Guerrero de Molina"'
                      : '"Hilda Guerrero de Molina" Technical School'}
                  </h3>
                  <h4>2011 - 2018</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-building-columns"></i>
                  <h3>
                    {spanish
                      ? "Programador Universitario"
                      : "College Programmer"}
                  </h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-building-columns"></i>
                  <h3>Universidad Tecnológica Nacional</h3>
                  <h4>2021 - 2023</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-code"></i>
                  {/* <h3>Fullstack Developer</h3> */}
                  <h3>
                    {spanish
                      ? "Desarrollador Fullstack"
                      : "Fullstack Developer"}
                  </h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-code"></i>
                  <h3>Bootcamp NUCBA</h3>
                  <h4>2021 - 2022</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-building-columns"></i>
                  {/* <h3>Ing. en Sistemas de la Información</h3> */}
                  <h3>
                    {spanish
                      ? "Ing. en Sistemas de la Información"
                      : "Information System Engineering"}
                  </h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-building-columns"></i>
                  <h3>Universidad Tecnológica Nacional</h3>
                  <h4>2019 - 2020</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-language"></i>
                  <h3>{spanish ? "Inglés B2" : "B2 English"}</h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-language"></i>
                  <h3>{spanish ? "Instituto Rush" : "Rush Institute"}</h3>
                  <h4>2020</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <h1>{spanish ? "Acerca de mi" : "About me"}</h1>
          <div>
            <p>
              {spanish
                ? "Me encanta aprender nuevas cosas, y cuando se trata de tecnología me gusta explorarlo por mi cuenta."
                : "I love to learn new things, and when it comes to IT i like to search and explore the things by myself."}
            </p>
            <p>
              {spanish
                ? "Me cosidero una persona autodidacta, dedicada, apasionada y constante."
                : "I consider myself as a self taught, dedicated, passionated and constant person."}
            </p>
            <p>
              {spanish
                ? "Mi meta actualmente es conseguir mi primer empleo IT, para así poder conocer colegas de los cuales aprenderé y asi podré desarrollarme mucho más."
                : "My current goal is to get my first professional IT job, in order to met really interesting partners whose i'll be able to learn and develop myself much more than i do now."}
            </p>
            {/* <p>In my free time i love to play and listen to music. I play the guitar, piano and also sing. I like to read books and workout, once a week i'm a volleyball player.</p> */}
          </div>
        </section>
        <section id="contact" className="contact">
          <h1>{spanish ? "Contactame!" : "Get in touch!"}</h1>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>
              <h4>+54 3863693540</h4>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <h4>thiagososaarganaraz@gmail.com</h4>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
                <h4>Thiago Sosa Argañaraz</h4>
              </a>
            </li>
          </ul>
          <h2>{spanish ? "Descargar CV" : "Download Resume"}</h2>
          <a
            className="resumeDownload"
            href={spanish ? spanishCv : englishCv}
            download={spanish ? "CV-Thiago" : "Resume-Thiago"}
          >
            {spanish ? "AQUÍ!" : "HERE!"}
          </a>
        </section>
      </div>
      <footer>
        <div className="footer-logo">
          <img src={logoWhite} />
        </div>
        <ul>
          <li>
            <i className="fa-solid fa-phone"></i>
            <h4>+54 3863693540</h4>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <h4>thiagososaarganaraz@gmail.com</h4>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
              <h4>Thiago Sosa Argañaraz</h4>
            </a>
          </li>
        </ul>
        <h5>Thiago Sosa Argañaraz ©</h5>
      </footer>
    </div>
  );
}

export default App;
