import React, {Component} from "react"
import {Button, ListGroup, Badge} from 'react-bootstrap'
import Card from "react-bootstrap/Card";


const Services = () => {
  return (
    <div>
    <Card style={{ width: '18rem' , margin:"2%", padding:"15px"}}>
      <div>
    <p className="mt-3"><b>Service Type: </b></p>
    <p>Client Name: </p>
    <p>Service Provider:  </p>
    <p>Service Status: </p>
    <p>Serive Charge: </p>
    <Badge pill bg="secondary">Status</Badge>{' '}
    <p className="text-center"><Button style={{backgroundColor: "blue"}}>Delete</Button></p>
    </div>
</Card>
</div>
  )
}

export default Services