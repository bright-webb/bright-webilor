import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Container>
        <Row className={`justify-content-center align-items-center d-flex ${!isMobile ? 'vh-100' : ''}`}>
            <Col md={8}>
                <div className="logo">
                    <Link to="/">Bright Webilor</Link>
                </div>
               
            </Col>
          <Col md={6}>
            <div data-aos="fade-up">
              <div className="photo">
                  <img src="/static/photo.jpg" alt="Profile photo" />
              </div>
              <h1 style={{marginTop: '40px'}}>Hello, I'm Bright Webilor</h1>
              <div className="links">
                <a href="https://github.com/bright-webb" target="_blank"><Icon name="github" />bright-webb</a>
                <a href="https://www.linkedin.com/in/bright-webilor-926604193/" target="_blank"><Icon name="linkedin" />bright-webilor</a>
                <a href="#"><Icon name="file alternate" />My Resume</a>
              </div>
            </div>
          </Col>
          <Col md={6}>
             <div data-aos="fade-right" className="intro-1">
             <h2>A full-stack Software Developer, based in <span style={{fontWeight: 'bold', color: '#82E0AA', textDecoration: 'underline' }}>Nigeria</span></h2>
            <p style={{marginTop: '25px'}}>Passionate about creating innovative solutions and collaborating with cross-functional teams.</p>
            <div className="action">
              <Link to="/about">
                <Button color='blue'>About me</Button>
              </Link>
              <Button>See all work</Button>
            </div>
             </div>
          </Col>
        </Row>
        <Row className="${!isMobile ? 'justify-content-center' : ''}">
        <Col md={12}>
                <div  data-aos="fade-in" className="intro-1">
                <h2>Results-driven software developer experienced in web development and proficient in
JavaScript/Typescript, ReactJS, PHP/Laravel, MySQL. Passionate about creating innovative
solutions and collaborating with cross-functional teams. Committed to continuous learning
and making a meaningful impact in the field of technology.
</h2>
                </div><br /><br />
              </Col>
        </Row>
      </Container>
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
                 <Link to="/work"><Button size="mini">See All</Button></Link>
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

export default Home
