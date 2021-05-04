import { useState } from "react"
import { Col, Container, Tab, ListGroup, Row,Image } from 'react-bootstrap';


function Attacks() {
  return (
    <Container>
      <h1 style={{textAlign:"center"}}>Attacks world wide</h1>
      <h5 style={{marginBottom :"20px",fontWeight:"400"}}>Brute force attacks take place all the time and there are many high-profile examples to speak of. We likely don’t even know about many bygone and ongoing attacks, but here are a few that have come to light in recent years:</h5>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Canadian Revenue Agency (CRA):
        </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Dunkin’ Donuts:
        </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Alibaba:
        </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Magento:
        </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Northern Irish Parliament:
        </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Firefox:
        </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                In August 2020, <a href="https://www.welivesecurity.com/2020/08/24/cyber-attacks-canada-revenue-agency-government/" target="_blank">a credential stuffing attack</a> resulted in the hacking of more than 11,000 accounts for the CRA and other government-related services.
                <br></br>
                <br></br>
                <Image style={{display:"block",margin:"0 auto",maxHeight :"50vh"}} src={process.env.PUBLIC_URL+"/CRA.png"} fluid />
            </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                The popular coffee franchise <a href="https://www.infosecurity-magazine.com/news/dunkin-donuts-parent-settles/" target="_blank">has been ordered to pay</a> hundreds of thousands of dollars in response to a 2015 incident where credential stuffing and brute force attacks were used to steal money through the chain’s mobile app and website.
                <br></br>
                <br></br>
                <Image style={{display:"block",margin:"0 auto",maxHeight :"50vh"}} src={process.env.PUBLIC_URL+"/dunkin_donuts.jpg"} fluid />
        </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                A <a href="https://www.infosecurity-magazine.com/news/massive-bruteforce-attack-on/" target="_blank">massive 2016 brute force attack</a> on the popular ecommerce site affected millions of accounts.
                <br></br>
                <br></br>
                <Image style={{display:"block",margin:"0 auto",maxHeight :"50vh"}} src={process.env.PUBLIC_URL+"/Alibaba.jpg"} fluid />
        </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                In March, 2018, <a href="https://esellercafe.com/magento-communicates-with-users-about-brute-force-attacks/" target="_blank">Magento had to warn users</a> that up to 1,000 admin panels had been compromised as a result of brute force attacks.
                <br></br>
                <br></br>
                <Image style={{display:"block",margin:"0 auto",maxHeight :"50vh"}} src={process.env.PUBLIC_URL+"/magento.png"} fluid />
        </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                Also in March, 2018, the <a href="https://www.hackread.com/northern-irish-parliament-hit-by-brute-force-attack/" target="_blank">accounts of several members</a> of the Northern Irish Parliament were accessed by brute force attackers.
                <br></br>
                <br></br>
                <Image style={{display:"block",margin:"0 auto",maxHeight :"50vh"}} src={process.env.PUBLIC_URL+"/North.svg"} fluid  />
        </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                It was <a href="https://palant.info/2018/03/10/master-password-in-firefox-or-thunderbird-do-not-bother/" target="_blank">revealed early in 2018 that Firefox’s</a> ‘master password’ feature can be easily brute-force attacked. This means that over the past nine years, many users’ credentials may have been exposed.
                <br></br>
                <br></br>
                <Image style={{display:"block",margin:"0 auto",maxHeight :"50vh"}} src={process.env.PUBLIC_URL+"/firefox.svg"} fluid />
        </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Attacks;