import React, {useState, useEffect} from "react"
import {Button, ListGroup, Badge} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import axios from "axios"


const Services = () => {
  const { REACT_APP_API_URL } = process.env
  const [ServiceList, setServiceList] = useState([])
    useEffect(() => {
  axios.get(`${REACT_APP_API_URL}/service/services`).then(res => {
    setServiceList(res.data.users || [])
  }).catch(e => console.log(e))
}, [])
  return (
    <div class="d-flex">
      { ServiceList.map(ele => (
      <Card style={{ width: '18rem' , margin:"2%", padding:"15px"}}>
        <div>
          <p className="mt-3"><b>{ele.service_type}</b></p>
          <p>{ele.service_clientname}</p>
          <p>{ele.service_provider}</p>
          <p>{ele.service_tatus}</p>
          <p>{ele.service_charge}</p>
          <Badge pill bg="secondary">Status</Badge>{' '}
          <p className="text-center"><Button style={{backgroundColor: "blue"}}>Delete</Button></p>
        </div>
      </Card>))}
    </div>
  )
}

export default Services