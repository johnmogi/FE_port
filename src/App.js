import React, { useState } from "react";
import portfolioData from "./data"; // Import your project data
import {
  Card,
  Button,
  Modal,
  Container,
  Row,
  Col,
  Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const handleShow = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const getExcerpt = (text) => {
    return text.length > 100 ? text.substring(0, 100) + "..." : text;
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="/path/to/your/logo.png" // Replace with your logo path
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {" My Portfolio"}
        </Navbar.Brand>
      </Navbar>

      <Container className="mt-4">
        <h1>My Portfolio</h1>
        <Row>
          {portfolioData.map((project) => (
            <Col md={4} key={project.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={project.thumbnail || "https://via.placeholder.com/150"}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{getExcerpt(project.description)}</Card.Text>
                  <Button variant="primary" onClick={() => handleShow(project)}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{currentProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{currentProject.description}</p>
            {/* You can add more content here such as images or links */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default App;
