import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <Container>
                <Row className="justify-content-center g-2">
                    <Col md={8}>
                    <div className="logo" style={{paddingTop: '30px'}}>
                        <Link to="/"><Icon name="angle left" /> Bright Webilor</Link> <span style={{color: '#eee'}}> | </span> <Link to="/about"><Icon name="user" /> About</Link>
                    </div>
                  
                </Col>
                <Col md={8}>
                    <h1 style={{marginTop: '40px'}} data-aos="fade-up">My Journey<span style={{color: '#82E0AA'}}>!</span></h1>
                    <div className="intro-1">
                    <h2 data-aos="fade-up">Over the course of my 7-year journey in software development, I've built a variety of projects, ranging from personal endeavors to collaborative team efforts. While I typically focus on purposeful projects, I do have some public projects in my repository that you can explore. Check them out below.</h2>
                    </div>
                  </Col>
                </Row>
                </Container>

                <section style={{paddingTop: '50px'}}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <h1 data-aos="fade-in">Projects</h1>
                                <hr />
                                <div className="projects">
                                    <div className="project" data-aos="fade-up">
                                        <h4>Math expression generator</h4>
                                        <p>A simple web application that generates math expressions. The app uses a mathematical expression parser to evaluate and generate a new expression whenever the page refreshes.</p>
                                        <div>
                                            <a href="#"  target="_blank" rel="noreferrer"><Icon name="github" />math-expression-generator</a>
                                        </div>
                                    </div>
                                    <div className="project" data-aos="fade-up">
                                        <h4>Slate PHP</h4>
                                        <p>Slate PHP is a simple lightweight collections of pre-configured PHP components, classes, and packages, designed to help developers  quickly set up their projects.</p>
                                        <div>
                                            <a href="#"  target="_blank" rel="noreferrer"><Icon name="github" />slate_php</a>
                                        </div>
                                    </div>

                                    <div className="project" data-aos="fade-up">
                                        <h4>Mailer</h4>
                                        <p>Mailer is a user-friendly web application designed for sending mass emails using PHP SMTP. You can import email addresses via CSV files or separate them with commas. The application allows users to design emails using a rich text editor or by pasting HTML code, which will be automatically formatted.</p>
                                        <div>
                                            <a href="#"  target="_blank" rel="noreferrer"><Icon name="github" />mailer</a>
                                        </div>
                                    </div>
                                    <div className="project" data-aos="fade-up">
                                        <h4>URL Shortener</h4>
                                        <p>A simple URL shortener application built with Laravel and Vue.js. This application features a graphical user interface that allows users to enter designated URLs and view the history of their shortened URLs.</p>
                                        <div>
                                            <a href="#"  target="_blank" rel="noreferrer"><Icon name="github" />url_shortener</a>
                                        </div>
                                    </div>
                                    <div className="project" data-aos="fade-up">
                                        <h4>Modular Laravel</h4>
                                        <p>Modular Laravel is an architecture I initially designed for one of my personal projects, and we are currently using it to develop our application. Modular Laravel is built with modularity in mind, allowing you to build your Laravel application in a modular and isolated manner, enhancing directory structure and scalability. In Modular Laravel, every module functions as a plugin, enabling you to encapsulate features into independent plugins with all the resources they need to operate autonomously.</p>
                                        <div>
                                            <a href="#"  target="_blank" rel="noreferrer"><Icon name="github" />ModularLaravel</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="bg-2" style={{padding: '20px'}} data-aos="fade-in">
        <Container>
        <Row className="justify-content-center">
              <Col md={8}>
                <div className="experience">
                  <h2 data-aos="fade-in">Recent work experience</h2>
                  <hr />
                    <div data-aos="fade-up">
                    <h3>Web Developer / Consultant at <span><a href="https://upsillonconsult.com" target="_blank" rel="noreferer" style={{fontWeight: 'bold', color: '#82E0AA', textDecoration: 'underline' }}>Upsillon Consult</a></span></h3>
                  <p>
                  Assisted with content updates on internal and external websites, improved user interfaces by updating menus to be more intuitive, which increased sales by 5%, met with internal customers to determine project requirements and built applications using the most appropriate technologies, wrote optimized scripts for automating data-heavy and processing-heavy tasks, and spearheaded a tech stack revamp that resulted in a 40% decrease in server costs.
                  </p>
                  <h5>2022 - 2024</h5>
                    </div>
                  <br />
                    <div data-aos="fade-up">
                    <h3>Software Developer at <span><a href="https://fowgate.com" target="_blank" rel="noreferer" style={{fontWeight: 'bold', color: '#82E0AA', textDecoration: 'underline' }}>Fowgate LLC</a></span></h3>
                  <p>
                  Built RESTful APIs to serve data to the JavaScript front-end based on dynamic user input, tested software for bugs and operating speed, fixed bugs, and documented processes to increase efficiency by 19%. Created a real estate web app integrated with Twilio for phone number verification and a payment gateway using React and Laravel. Consistently received the best annual performance rating, awarded to the top ~5% of employees.
                  </p>
                  <h5>2021 - 2022</h5>
                    </div>
                  <br />
                  <div data-aos="fade-up">
                  <h3>Software Developer at <span><a href="https://xaoxig.com" target="_blank" rel="noreferer" style={{fontWeight: 'bold', color: '#82E0AA', textDecoration: 'underline' }}>Xao & Xig</a></span></h3>
                  <p>
                  Developed and designed three critical software programs for financial tracking and reporting. Managed the lifecycle of web applications from conceptualization to final delivery, including post-launch support. Oversaw a team of four developers, leading weekly discussions to brainstorm software development ideas and track changes in existing programs. Designed and built a comprehensive support system that enhanced customer service response efficiency, reducing response time by 50% and increasing customer satisfaction ratings by 40%.
                  </p>
                  <h5>2017 - 2019</h5>
                  </div>
                  <br />
                 
                </div>
              </Col>
          </Row>
        </Container>
      </section>
      <section data-aos="fade-in">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="contact" style={{padding: '20px'}} data-aos="fade-down">
                <h2 style={{fontWeight: 'bold'}}>Contact me</h2><hr/>
                <a href="mailto:webilorbright6@gmail.com" target="_blank">webilorbright6@gmail.com</a>
                <a href="tel:+2348146119562" target="_blank">+2348146119562</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        </>
    )
}

export default Work;