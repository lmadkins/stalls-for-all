// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
 {<Card style={{ width: '50vw' }}>
  <Card.Body>

    <Form>  
      <Form.Group 
      className="mb-4" 
      controlId="address">

        <Form.Label 
        column="lg" 
        lg={5}>
          Enter Street Name or Zip Code 
        </Form.Label>
        
        <Col med={4}>
          <Form.Control 
           size="lg"
          placeholder="Location" />
        </Col> 
      </Form.Group>
     

    <Form.Group 
      as={Row} 
      className="mb-3">
        <Col 
        sm={{ span: 10, offset: 2 }}>
          <Button type="submit"
          size="lg">
            Search
          </Button>
        </Col>
        </Form.Group>
      </Form>
    </Card.Body>
  </Card>   }   */