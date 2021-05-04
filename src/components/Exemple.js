import { useState } from "react"
import { Col, Form, Button, Container, Accordion, Card, Row, ListGroup, ListGroupItem,Spinner} from 'react-bootstrap';

let intStartFrom = 500000000;
let clicked = false ;
function havyTask(from,to,cb) {
    let i = from ;
    function count () {
        do {
            if(cb(i,true)) {
                return true
            }
            i++;
          } while (i % 10000 !== 0 && i < to);
        if(i < to) setTimeout(count);
        else return cb(i,false) ;
    }
    return count ;
    
};
function clsAlphaNoOnly(string) {  // Accept only alpha numerics, no special characters 
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");

    if (regex.test(string)) {
        return true;
    }
    if (string === "") {
        return true
    }
    return false;
}
let array = []
function Exemple() {
    const [password, setPassword] = useState('89p8zk');
    const [passwordLength, setPasswordLength] = useState(4);
    const [alphabetLength, setAlphabetLength] = useState(36);
    const [numberOfTries, setNumberOfTries] = useState(30000);
    const [printAfter, setPrintAfter] = useState(2000);
    const [startFrom, setStartFrom] = useState(intStartFrom.toString(alphabetLength));
    const [thing, setThing] = useState([]);
    const [calculating, setCalculating] = useState(false);
    const [timeEllpased, setTimeEllpased] = useState("");
    const [counter, setCounter] = useState(0);

    function bruteForce() {
        if(clicked) {
            console.log("calculating try again later ");
            return ;
        };
        const textAria = document.getElementById("idTextAria");
        clicked = true ;
        setCalculating(true);
        let from = parseInt(startFrom, 36);
        let to = numberOfTries - 1 + parseInt(startFrom, 36) ;
        let arr = [];
        let string = ""
        setThing(arr);
        setTimeEllpased("");
        let start = Date.now();
        havyTask(from,to ,(i,next)=> {
            const guess = i.toString(alphabetLength);
            arr.push(guess);
            string += `+ ${guess} `;
            if (i % printAfter === 0) {
                setCounter( i - from ) ;
                textAria.value += string;
                string = "" ;
                
            }
            if( password == guess) {
                setThing(arr);
                setCounter( i - from ) ;
                textAria.value += string;
                string = "" ;
                console.log("Found",guess);
                let ellapsedTime = Date.now() - start;
                setTimeEllpased(ellapsedTime);
                setCalculating(false);
                clicked = false ;
                alert("timeEllased "+ ellapsedTime)
                alert("password found "+ guess) ;
                return true ;
            }
            if(next === false) {
                console.log("not Found");
                setCounter( i - from + 1) ;
                textAria.value += string;
                string = "" ;
                let ellapsedTime = Date.now() - start;
                setTimeEllpased(ellapsedTime);
                setCalculating(false);
                clicked = false ;
                setThing(arr);
                alert("timeEllased "+ ellapsedTime)
                alert("password not found") ;
            }

            
        })();


    }
   
    

    return (

        <Container>
            <h1 style={{textAlign:"center"}}>live exemple :</h1>
            <Form noValidate >
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>password</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="password"
                            value={password}
                            onInput={(e) => setPassword(e.target.value.toLowerCase())} />

                        <Form.Text muted>Password to guess</Form.Text>


                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>passwordLength :</Form.Label>
                        <Form.Control
                            pattern="[0-9]*"
                            required
                            type="text"
                            placeholder="passwordLength"
                            onInput={(e) => setPasswordLength(parseInt(e.target.value) ? parseInt(e.target.value) : 0)}
                            value={passwordLength}

                        />
                        <Form.Text muted>passwordLength Only used to calculate complexity</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>printAfter</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            placeholder="printAfter"
                            onInput={(e) => setPrintAfter(parseInt(e.target.value) ? parseInt(e.target.value) : 0)}
                            value={printAfter}
                        />
                        <Form.Text muted>Used for performance. print tried password every {printAfter} instruction.</Form.Text>

                    </Form.Group>
                </Form.Row>

                <Form.Row>

                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>numberOfTries</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="numberOfTries"
                            required

                            value={numberOfTries}
                            onInput={(e) => setNumberOfTries(parseInt(e.target.value) ? parseInt(e.target.value) : 0)}
                        />
                        <Form.Text muted>Only {numberOfTries} iteration will be executed</Form.Text>
                    </Form.Group>


                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>StartFrom</Form.Label>
                        <Form.Control
                            value={startFrom}
                            onInput={(e) => clsAlphaNoOnly(e.target.value) ? setStartFrom(e.target.value === "" ? "0" : e.target.value.toLowerCase()) : startFrom}
                            type="text"
                            placeholder="State"
                            required />
                        <Form.Text muted>start searching from {startFrom}</Form.Text>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="idTextAria">
                        <Form.Label>Guesses: {counter} </Form.Label>
                        <Form.Control readOnly as="textarea" rows={6} />
                    </Form.Group>
                </Form.Row>
                {/* <Button type="submit">Submit form</Button> */}

            </Form>


            <Row className="justify-content-md-center" style={{ marginBottom: "10px" }}>
                <Col md="auto">
                    <Button onClick={bruteForce}>
                        {calculating ? <Spinner animation="border" variant="info" /> : "Brute Force" }
                    </Button>
                </Col>

            </Row>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Information
                    </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Number of required tries in worst case for this exemple (36 character): {Math.pow(passwordLength, alphabetLength)}</ListGroupItem>
                                        <ListGroupItem>TimeEllapsed : {timeEllpased == "" ? "" : `${timeEllpased}ms` }</ListGroupItem>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion></Col>
            </Row>

        </Container>
        // <div>
        //     <span>
        //         <label htmlFor="password">password : </label>
        //         <input id="password" type="text" onInput={(e) => setPassword(e.target.value)} value={password} />
        //     </span>
        //     <span>
        //         <label htmlFor="passwordLength">passwordLength : </label>
        //         <input id="passwordLength" pattern="[0-9]*" type="text" onInput={(e) => setPasswordLength(parseInt(e.target.value) ? parseInt(e.target.value) : 0)} value={passwordLength} />
        //     </span>

        //     <span>
        //         <label htmlFor="printAfter">printAfter : </label>
        //         <input id="printAfter" pattern="[0-9]*" type="text" onInput={(e) => setPrintAfter(parseInt(e.target.value) ? parseInt(e.target.value) : 0)} value={printAfter} />
        //     </span>
        //     <span>
        //         <label htmlFor="numberOfTries">numberOfTries : </label>
        //         <input id="numberOfTries" type="text" onInput={(e) => setNumberOfTries(parseInt(e.target.value) ? parseInt(e.target.value) : 0)} value={numberOfTries} />
        //     </span>
        //     <span>
        //         <label htmlFor="startFrom">startFrom : </label>
        //         <input  id="startFrom" type="text" onInput={(e) => clsAlphaNoOnly(e.target.value) ? setStartFrom(e.target.value === "" ? "0" : e.target.value) : startFrom} value={startFrom} />

        //     </span>

        //     {/* <label htmlFor="password">password : </label>
        //     <input id="password" type="text" onInput={(e)=> setPassword(e.target.value)} value={password} />
        //     <br></br> */}

        //     <fieldset style={{ display: "flex", width: "80vw", flexWrap: "wrap", margin: "30px auto", overflow: "scroll", height: "30vh" }}>
        //         <legend>Guesses:</legend>
        //         {thing.map(el => <span className="guess" key={el}>{el}</span>)}
        //     </fieldset>
        //     <button onClick={() => {startCount();}}>calculate</button>
        //     <button onClick={() => setCalculating(false) }>stop</button>
        // </div>
    );
}

export default Exemple;