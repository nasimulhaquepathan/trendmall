import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCard from "../ProjectCards/ProjectCard";
import Particle from "./Particle";
import leaf from "../../assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import bitsOfCode from "../../Assets/Projects/blog.png"
import gym from '../../assets/Projects/project-1.jpg'
import ecommerce from '../../assets/Projects/project3.jpg'
import food from '../../assets/Projects/projects 5.jpg'
import cars from '../../assets/Projects/cars (2).jpg'
import tours from '../../assets/Projects/tours.jpg'
import foods from '../../assets/Projects/foods-min.jpg'

function Projects() {
  return (
    <Container fluid className="fortfolio pt-5" id="fortfolio">
      <Particle />
      <Container>
        <h4 className="text-center">Portfolio</h4>
        <p className="project-heading text-center">
          My Recent <strong className="purple">Works </strong>
        </p>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tours}
              isBlog={false}
              title="Travel-World"
              description="Embark on your next travel journey with confidence and convenience. Visit Travel World today and unlock a world of extraordinary travel experiences. Let us handle the details while you focus on creating cherished memories that will last a lifetime."
              ghLink="https://github.com/nasimulhaquepathan/Tour-Management-Redux-Toolkit"
              demoLink="https://toursmanagement.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Fast-Fitnesss"
              description="Stay connected and informed through our website's features. Get updates on class schedules, upcoming events, and special promotions. We offer a convenient online booking system, allowing you to You can also track your progress and set fitness goals through our integrated fitness tracking tools.."
              ghLink="#"
              demoLink="https://fitnesshero.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cars}
              isBlog={false}
              title="RentZoom"
              description="Our website provides comprehensive vehicle details, including descriptions, specifications, allowing you to make an informed decision. Wethe booking process. and we offer flexible rental periods, whether you need a car for a few hours, a day, a week, or longer."
              ghLink="https://github.com/nasimulhaquepathan/car-rental-website.git"
              demoLink="https://rentzoom.netlify.app/home"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foods}
              isBlog={false}
              title="Teasty teat"
              description="Once your order is confirmed, you can track its progress in real-time through our app's tracking feature. From kitchen preparation to delivery, you'll stay informed about every step of the process. Our delivery partners are reliable and committed to providing timely and professional service."
              ghLink="https://github.com/nasimulhaquepathan/Dinnermite.git"
              demoLink="https://flavorita.netlify.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="TrendMall"
              description="Our user-friendly website ensures effortless navigation, making it easy for you to explore and find exactly what you're looking for. With detailed product descriptions, multiple images, and customer reviews, you can make informed purchasing decisions and shop with confidence.
              ."
              ghLink="https://github.com/nasimulhaquepathan/trendmall.git"
              demoLink="trendmall.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dalle 2.0"
              description="Picture generation has the potential to unlock creative possibilities and streamline visual content creation. By leveraging the power of machine learning and AI, these algorithms can accelerate the design process, inspire new artistic directions, and expand the boundaries of visual expression.."
              ghLink="https://github.com/nasimulhaquepathan/Dall-E-2.0.git"
              demoLink="https://dali-e.netlify.app/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
