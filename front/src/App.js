import React from "react";
import sqlIcon from "./assets/sqlIcon.png";
import sharpIcon from "./assets/sharp.png";
import "./app.css";

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="left-side-nav">
            <a href="#">Thiago</a>
          </div>
          <div className="right-side-nav">
            <ul>
              <li>Stack</li>
              <li>Projects</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-one">
            <img></img>
          </div>
          <div className="hero-two">
            <h1>Hello, I'm Thiago</h1>
            <h2>Fullstack Developer</h2>
          </div>
        </div>
      </header>
      <div className="body-container">
        <section className="stack">
          <h1>Technologies Stack</h1>
          <ul>
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
          </ul>
        </section>
        <section className="projects">
          <h1>My Projects</h1>
          <div className="projects-wrapper">
            <a href="#">
              <div className="projects-card">
                <img src={""} />
                <h2>Project 1</h2>
                <p>project description</p>
              </div>
            </a>
            <a href="#">
              <div className="projects-card">
                <img src={""} />
                <h2>Project 1</h2>
                <p>project description</p>
              </div>
            </a>
          </div>
        </section>
        <section className="education">
          <h1>Education</h1>
          <ul>
            <li>
              <i class="fa-solid fa-school"></i>
              <h3>
                Técnico en Computación Personal y Profesional Esc. Técnica
                "Hilda Guerrero de Molina"
              </h3>
            </li>
            <li>
              <i class="fa-solid fa-building-columns"></i>
              <h3>Programador Universitario UTN-FRT</h3>
            </li>
            <li>
              <i class="fa-solid fa-code"></i>
              <h3>NUCBA</h3>
            </li>
            <li>
              <i class="fa-solid fa-building-columns"></i>
              <h3>Ing. en Sistemas de la Información UTN-FRT</h3>
            </li>
            <li>
              <i class="fa-solid fa-language"></i>
              <h3>B2 English</h3>
            </li>
          </ul>
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
          <button>Download Resume</button>
        </section>
      </div>
      <footer>
        <h2>Thiago Sosa Argañaraz</h2>
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
