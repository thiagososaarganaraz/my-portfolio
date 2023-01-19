import React from "react";
import "./app.css";
import noBackgroundLogo from "./assets/png/logo-no-background.png";
import logoBlack from "./assets/png/logo-black.png";
import project1 from "./assets/projects/Ecommerce.jpg";

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="left-side-nav">
            <a href="#">
              <img src={noBackgroundLogo} />
            </a>
          </div>
          <div className="right-side-nav">
            <ul>
              <li>
                <a href="#">Stack</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-one">
            <img src={logoBlack} />
          </div>
          <div className="hero-two">
            <h1>Fullstack Developer</h1>
          </div>
        </div>
      </header>
      <div className="body-container">
        <section className="stack">
          <h1>Stack</h1>
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
              <div>SQL</div>
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
        <section className="projects">
          <h1>Projects</h1>
          <div className="projects-wrapper">
            <div className="projects-card">
              <h2>Punto de Venta</h2>
              <div className="project-slider">
                <img src={project1} alt="ecommerce desarrollado en c#" />
              </div>
              <p>
                Aplicacion de escritorio para negocios con control de stock,
                control de usuarios y administradores. Desarrollado en C# y base
                de datos en SQL Server.
              </p>
              <a href="#">View More</a>
            </div>
            <div className="projects-card">
              <img src={""} />
              <h2>Project 1</h2>
              <p>project description</p>
              <a href="#">View More</a>
            </div>
          </div>
        </section>
        <section className="education">
          <h1>Education</h1>
          <div className="education-wrapper">
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i class="fa-solid fa-school"></i>
                  <h3>Técnico en Computación Profesional y Personal</h3>
                </div>
                <div className="back-box">
                  <i class="fa-solid fa-school"></i>
                  <h3>Escuela Técnica "Hilda Guerrero de Molina"</h3>
                  <h4>2011 - 2018</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i class="fa-solid fa-building-columns"></i>
                  <h3>Programador Universitario</h3>
                </div>
                <div className="back-box">
                  <i class="fa-solid fa-building-columns"></i>
                  <h3>Universidad Tecnológica Nacional</h3>
                  <h4>2021 - 2023</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i class="fa-solid fa-code"></i>
                  <h3>Fullstack Developer</h3>
                </div>
                <div className="back-box">
                  <i class="fa-solid fa-code"></i>
                  <h3>Bootcamp NUCBA</h3>
                  <h4>2021 - 2022</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i class="fa-solid fa-building-columns"></i>
                  <h3>Ing. en Sistemas de la Información</h3>
                </div>
                <div className="back-box">
                  <i class="fa-solid fa-building-columns"></i>
                  <h3>Universidad Tecnológica Nacional</h3>
                  <h4>2019 - 2020</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i class="fa-solid fa-language"></i>
                  <h3>B2 English</h3>
                </div>
                <div className="back-box">
                  <i class="fa-solid fa-language"></i>
                  <h3>Instituto Rush</h3>
                  <h4>2020</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <h1>About me</h1>
          <div>
            <p>
              I love to learn new things, and when it comes to IT i like to
              search and explore the things by myself to become a more complete
              professional.
            </p>
            <p>
              I consider myself as a self taught, dedicated, passionated and
              constant person.
            </p>
            <p>
              My goal is to get my first professional IT job, in order to met
              really interesting partners whose i'll be able to learn and
              develop myself much more than i do now.
            </p>
            {/* <p>In my free time i love to play and listen to music. I play the guitar, piano and also sing. I like to read books and workout, once a week i'm a volleyball player.</p> */}
          </div>
        </section>
        <section className="contact">
          <h1>Contact me!</h1>
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
          <h3>Download my resume</h3>
          <button>Here!</button>
        </section>
      </div>
      <footer>
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
      </footer>
    </div>
  );
}

export default App;
