import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import Footer from "components/Footers/Footer.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <Navbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk Anthony. . .</h2>
                <h5 className="description">
                Before starting at the Coding Dojo in spring of 2020,
                I spent almost 20 years in the grocery industry. Climbing
                the hierarchical ladder at Trader Joe’s taught me the 
                importance of hard work, dedication, and resourcefulness.
                At the same time, I have always craved the opportunity to 
                keep learning and to push my boundaries. Computers have 
                always captured my interest, and I’ve finally gotten the 
                courage to take a leap. Now that I have, a new world has 
                unfolded and I am ready for a new chapter and a new 
                challenge.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Alcatraz</h4>
                    <p>
                      My very first project.  A basic HTML5 web 
                      page design, with a little CSS and Bootstrap 
                      for style.
                    </p>
                    <Button className="btn-link" color="info" href="https://github.com/ASand-design/Alcatraz.git">
                      Github
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Virtual Parks</h4>
                    <p>
                      Python and Djago run heavy in this app, with a
                      little help from HTML5, CSS and Bootstrap.
                    </p>
                    <Button className="btn-link" color="info" href="https://github.com/ASand-design/Virtual-Parks.git">
                      Github
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">This site</h4>
                    <p>
                      Created this site using JavaScript and React.  Come check out my code.
                    </p>
                    <Button className="btn-link" color="info" href="https://github.com/ASand-design/Anthony-s-web-app.git">
                      Github
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">About the Team. . .</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#hank" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/IMG_6404.JPG")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#hank" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Hank</CardTitle>
                        <h6 className="card-category">Sidekick</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Hank is an American Staffordshire Terrier and Australian Shepherd mix from
                      the Palo Alto Rescue Shelter (No he didn't teach me how to code).  He did 
                      remind me to take lots of breaks for new outdoor adventures. 
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#anthony" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/IMG_1533.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#anthony" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Anthony Sanderson</CardTitle>
                        <h6 className="card-category">Web Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="https://github.com/ASand-design"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="https://www.linkedin.com/in/anthony-sanderson-b2aa25191" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/IMG_5024.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#anthony" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Olivia</CardTitle>
                        <h6 className="card-category">Partner in Crime</h6>
                      </div>
                    </a>
                    <p className="card-description text-center"> 
                      You made me stronger and braver than I felt, and you made 
                      me feel loved more than anyone has made me feel loved. You 
                      make me look forward to new adventures and challenges. You 
                      reassure me that I will never have to go through life on my 
                      own again.   
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Let's keep in touch</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your innermost thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
