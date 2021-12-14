import React from 'react'
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"

function Home() {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.15ndtVnZCvE190IIXzkTSQHaJ4?pid=ImgDet&rs=1" style={{height: "150px"}} />
  <Card.Body>
    <Card.Title>Iphone</Card.Title>
    <Card.Text>
Price 10000
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
    <Button variant="dark">Remove to cart</Button>
  </Card.Body>
</Card>
        </div>
    )
}
export default Home;