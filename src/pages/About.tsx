import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Icon, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
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
                        <Link to="/"><Icon name="angle left" />Bright Webilor</Link> <span style={{color: '#eee'}}> | </span> <Link to="/work"><Icon name="briefcase" /> Work</Link>
                    </div>
                    
                </Col>
                  <Col md={8}>
                    <h1 style={{marginTop: '40px'}} data-aos="fade-up">About me<span style={{color: '#82E0AA'}}>!</span></h1>
                    <div className="intro-1">
                    <h2 data-aos="fade-up">I'm a versatile full-stack software developer with a strong emphasis on backend development. Currently, I lead a talented team of two developers in crafting the next-generation collaboration platform. </h2>
                    <h2 data-aos="fade-in"><span style={{fontWeight: 'bold'}}>My</span> expertise lies in building robust backend infrastructures, and I take pride in having single-handedly developed our platform's backend infrastructure using Laravel, MySQL, Redis, and Docker. By leveraging a CI/CD <span style={{fontWeight: 'bold'}}>pipeline</span> and a GitHub workflow, I have streamlined our deployment process and accelerated our development cycle.</h2>
                    <h3 data-aos="fade-in">Over the years, I have garnered extensive experience in software development and have worked with various methodologies, including Agile and Kanban. Beyond coding, I'm passionate about solving real world problems and continuously learning new technologies to enhance my skill set.</h3>
                    </div>
                  </Col>

                  <Col md={8}>
                    <br /><br />
                    <h2 style={{fontWeight: 'bold'}} data-aos="fade-up">Skill Set</h2><hr />
                    <div className="skill-set">
                        <div>
                            <Icon name="php" size="large" style={{color: '#484C89' }}/>
                        </div>
                        <div>
                            <Icon name="laravel" size="large" style={{color: '#F05340'}}/>
                        </div>
                        <div>
                            <Icon name="docker" size="large" style={{color: '#0db7ed' }}/>
                        </div>
                        <div>
                            <Icon name="git" size="large" style={{color: '#F1502F' }}/>
                        </div>
                        <div>
                            <Icon name="js" size="large" style={{color: '#f0db4f'}} />
                        </div>
                        <div>
                            <Icon name="html5" size="large" style={{color: '#e34c26' }} />
                        </div>
                        <div>
                            <Icon name="css3" size="large" style={{color: '#264de4' }}/>
                        </div>
                        <div>
                            <Icon name="sass" size="large" style={{color: '#cc6699' }}/>
                        </div>
                        <div>
                            <Icon name="aws" size="large" style={{color: '#FF9900' }}/>
                        </div>
                        <div>
                            <Icon name="react" size="large" style={{color: '#61DBFB' }}/>
                        </div>
                        <div>
                            <Icon name="vuejs" size="large" style={{color: '#41B883' }}/>
                        </div>
                        <div>
                           <img src="/static/redis.png" />
                        </div>
                        <div>
                           <img src="/static/mysql.png" />
                        </div>
                        <div>
                           <img src="/static/typescript.png" />
                        </div>
                    </div>
                    
                </Col>
                </Row>
            </Container>
            <br /><br />
            <section className="bg-2" style={{padding: '20px'}}>
        <Container>
        <Row className="justify-content-center">
              <Col md={8}>
                <div className="experience">
                  <h2 data-aos="fade-in">Recent work experience</h2>
                  <hr />
                    <div data-aos="fade-up">
                    <h3>Web Developer / Consultant at <span><a href="https://upsillonconsult.com" target="_blank" style={{fontWeight: 'bold', color: '#82E0AA', textDecoration: 'underline' }}>Upsillon Consult</a></span></h3>
                  <p>
                  Assisted with content updates on internal and external websites, improved user interfaces by updating menus to be more intuitive, which increased sales by 5%, met with internal customers to determine project requirements and built applications using the most appropriate technologies, wrote optimized scripts for automating data-heavy and processing-heavy tasks, and spearheaded a tech stack revamp that resulted in a 40% decrease in server costs.
                  </p>
                  <h5>July 2021 - Present</h5>
                    </div>
                  <br />
                    <div data-aos="fade-up">
                    <h3>Software Developer at <span><a href="https://fowgate.com" style={{fontWeight: 'bold', color: '#82E0AA', textDecoration: 'underline' }}>Fowgate LLC</a></span></h3>
                  <p>
                  Built RESTful APIs to serve data to the JavaScript front-end based on dynamic user input, tested software for bugs and operating speed, fixed bugs, and documented processes to increase efficiency by 19%. Created a real estate web app integrated with Twilio for phone number verification and a payment gateway using React and Laravel. Consistently received the best annual performance rating, awarded to the top ~5% of employees.
                  </p>
                  <h5>July 2021 - Present</h5>
                    </div>
                  <br />
                  <div data-aos="fade-up">
                  <h3>Software Developer at <span><a href="https://xaoxig.com" style={{fontWeight: 'bold', color: '#82E0AA', textDecoration: 'underline' }}>Xao & Xig</a></span></h3>
                  <p>
                  Developed and designed three critical software programs for financial tracking and reporting. Managed the lifecycle of web applications from conceptualization to final delivery, including post-launch support. Oversaw a team of four developers, leading weekly discussions to brainstorm software development ideas and track changes in existing programs. Designed and built a comprehensive support system that enhanced customer service response efficiency, reducing response time by 50% and increasing customer satisfaction ratings by 40%.
                  </p>
                  <h5>July 2021 - Present</h5>
                  </div>
                  <br />
                  <Link to="/work"><Button size="mini" data-aos="fade-in">See All</Button></Link>
                </div>
              </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-3">
        <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="education" style={{padding: '20px'}}>
            <h2 data-aos="fade-in">Education</h2><hr/>
            <Row className="justify-content-between">
               <Col md={8} data-aos="fade-in">
               <h3>Software Engineering</h3>
               <h5 style={{color: '#82E0AA'}}>MR Soft computer Institute</h5>
               </Col>
               <Col md={4} data-aos="fade-in">
                  <h5>2013 - 2015</h5>
                  <p>Port Harcourt, Nigeria</p>
               </Col>
            </Row>
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
                <a href="#">webilorbright6@gmail.com</a>
                <a href="#">+2348146119562</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        </>
    )
}

export default About;