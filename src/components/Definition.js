import { Container,Image} from 'react-bootstrap';
function Definition() {
    return (
        <Container>
            <h1 style={{textAlign:"center"}}>Definition</h1>
            <p>
                In the world of Hackers, Brute Force attack is defined as a repetitive successive
                attempts of trying various password to break into the website.
                This attack will be vigorously done by hackers to login into the website.
                Hackers use bots to automate this process.
                The bots will be installed in various computers in a malicious way and it will be used for the attacks to make it in an efficient way.
            </p>
            <Image style={{maxHeight : "50vh",margin:"10px auto",display:"block"}} src={process.env.PUBLIC_URL+"/bruteForceill.png"} fluid></Image>
            <p>
                Sometimes, brute force attacks are still done by hand, meaning that there’s an actual person sitting in some basement and playing a guessing game with your credentials. But, more often than not these days, the hackers use a brute force algorithm, or brute force password cracker, which is, basically,
                a bot that submits infinite variations of username/password combination and notifies the hacker when it gets in.
            </p>
        </Container>
    );
}

export default Definition;