// import React from "react"
import React, {Component} from "react"
import {Button, ListGroup, Badge} from 'react-bootstrap'
import Card from "react-bootstrap/Card";

const AdminHome = () => {
  return (
    <div>
      <Card style={{ width: '18rem' , margin:"2%", padding:"15px"}}>
      <div>
      <Card.Img variant="top" src="holder.js/100px180" />
        <p className="mt-3"><b>User Name </b> (User Type)</p>
        <p class="text-secondary">Email</p>
        <p className="text-center"><Button style={{backgroundColor: "red"}}>Remove User</Button></p>
  </div>
</Card>
</div>
  )
}

export default AdminHome