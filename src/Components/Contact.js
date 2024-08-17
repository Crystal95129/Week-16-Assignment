import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import image7 from './images/Snorkle.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export const Contact = () => {
  return (
    <>
    <Container>
        <Row>
            <h1>Share Your Hawaii Expereience</h1>
            <div>
                <Image src={image7} class="img-fluid" alt="Hawaii Picture" />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How Many Time Have You Visited Hawaii ? </Form.Label>
                        <Form.Control type="text" placeholder="1, 2, 3, or more ?" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Which Hawaii Island ?</Form.Label>
                        <Form.Control type="text" placeholder="Island Name ?" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Experience</Form.Label>
                        <Form.Control as="textarea" placeholder="My Hawaii Expereience... Tips... Itinerary..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Row>
    </Container> 
    </>
  )
}

