import { Container } from 'react-bootstrap';
function TypeOfBruteForce() {
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>Types</h1>

            <h4>1. Simple brute force attack</h4>
            <p>During a simple attack, as a rule, various methods are used to select your passwords and logins. Most often, this type of attack is used to crack local files, because there are no restrictions on the number of attempts.</p>


            <h4>2. Dictionary brute force attack</h4>
            <p>During a dictionary attack, hackers do not randomly select a password and login but use a special dictionary of the most common passwords. For example, they enter such common phrases as "admin," "welcome," etc.</p>

            <h4>3. Hybrid brute force attack</h4>
            <p>A hybrid brute force attack is a mix of various types with the aim of gaining access to your data. Such an attack combines both dictionary and simple attacks.</p>

            <h4>4. Credential stuffing</h4>
            <p>During <a href="https://www.comparitech.com/blog/information-security/credential-stuffing-attacks/" target="_black">credential stuffing</a> , hackers crack your site with passwords and logins that have already appeared somewhere. Often users put the same password and login on all social networks and other accounts. Accordingly, if hackers break into one website, then they can easily break others.</p>




        </Container>
    );
}

export default TypeOfBruteForce;