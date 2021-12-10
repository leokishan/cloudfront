// import React from "react"
import React, {useState, useEffect} from "react"
import {Button, ListGroup, Badge} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import axios from "axios"

const AdminHome = () => {
const { REACT_APP_API_URL } = process.env
const [userList, setUserList] = useState([])
useEffect(() => {
  axios.get(`${REACT_APP_API_URL}/user/users`).then(res => {
    setUserList(res.data.users || [])
  }).catch(e => console.log(e))
}, [])

  return (
  <div class="d-flex">
    { userList.map(ele => (
      <Card style={{ width: '18rem' , margin:"2%", padding:"15px"}}>
        <div>
        <Card.Img variant="top" src="holder.js/100px180" />
          <p className="mt-3"><b>{ele.user_name} </b> ({ele.user_type})</p>
          <p class="text-secondary">{ele.user_email}</p>
          <p className="text-center"><Button style={{backgroundColor: "red"}}>Remove User</Button></p>
        </div>
    </Card>
    ))}
  </div>)
}

export default AdminHome