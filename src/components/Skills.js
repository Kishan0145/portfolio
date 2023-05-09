import react from "../assets/img/react-js-icon.png";
import nodejs from "../assets/img/nodejs.png"
import angular from "../assets/img/angular-icon.png"
import html from "../assets/img/html-icon.png"
import sass from "../assets/img/sass-icon.png"
import js from "../assets/img/javascript-programming-language-icon.png"
import ts from "../assets/img/typescript-programming-language-icon.png"
import git from "../assets/img/git-icon.png"
import mongo from "../assets/img/mongodb.png"
import mui from "../assets/img/icons8-material-ui-144.png"


import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Skills</h2>
              <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Image" />
                  <h5>Mongo DB</h5>
                </div>
                <div className="item">
                  <img src={angular} alt="Image" />
                  <h5>Angular Js</h5>
                </div>
                <div className="item">
                  <img src={ts} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={mui} alt="Image" />
                  <h5>Material Ui</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={sass} alt="Image" />
                  <h5>Scss/Css</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
