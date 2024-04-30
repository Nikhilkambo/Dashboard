import React from 'react'
import { Card ,Row, Col,Button,Form } from 'react-bootstrap';
import Avatar from './Avatar';


export default function CustomCard({ title, text, imageUrl }) {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={imageUrl} /> */}
      <Avatar imageUrl={imageUrl}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {/* <Button variant="primary" className='' style={{ marginRight: '10px' }}>Click Me</Button> 
        <Button variant="secondary">Button 2</Button>  */}
       
        <Form>
       <Row>
            <Col>
              <Form.Check
                type="checkbox"
                label="Approve"
                id="checkbox1"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Delete"
                id="checkbox2"
              />
            </Col>
          
          </Row>
        </Form>
        

      </Card.Body>
    </Card>
    
    </div>
  )
}
