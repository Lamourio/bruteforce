import { Col, Form, Button, Container, Accordion, Card, Row, ListGroup, ListGroupItem,Spinner} from 'react-bootstrap';
function Protection() {
    return (
        <Container>
        <h1 style={{textAlign:"center"}}>protect your self</h1>    
        <h4>1. Use stronger passwords</h4>
        <p>The easiest and most effective way to prevent the loss of your data is to create a strong password.

A strong password will be difficult to break if it is:

unique to each new site
does not contain keywords for your area that can be guessed
consist of a large number of characters, the bigger, the better
will contain not only letters but also numbers and signs</p>

<h4>2. Limit number of login attempts</h4>
<p>Another way to prevent hacker attacks would be to establish a limited amount of data entry. As we have already mentioned, brute force attacks occur through continuous data selection. Therefore, this method can help a lot.

you can set 5 attempts to enter data
you can allow someone to resuming attempts after confirming the owner’s mail</p>
<h3>3. Use  CAPTCHAs</h3>
<p> CAPTCHAs help distinguish between spam computers and real users. We are not saying that CAPTCHAs are a reliable way to prevent data theft. However, this is an excellent way to delay the time to get them.</p>

<h4>4. Enforce two-factor authentication</h4>
<p>Two-factor authentication is like a bulletproof vest. It uses a two-step process to login. Most often 2SV occurs through:</p>
<ListGroup>
  <ListGroup.Item>SMS code</ListGroup.Item>
  <ListGroup.Item>email message</ListGroup.Item>
  <ListGroup.Item>fingerprints</ListGroup.Item>
  <ListGroup.Item>retina scans</ListGroup.Item>
  <ListGroup.Item>face scans</ListGroup.Item>
</ListGroup>
<br></br>
<h4>5. Monitor attempted logins</h4>
<p>Monitoring login attempts is a good way to prevent your data from being stolen. If you notice that within a short time someone tried to enter your site a large number of times, then this should be a warning call.</p>




        </Container>
    );
}

export default Protection;