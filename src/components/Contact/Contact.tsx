import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:Hello@bharvathkumar.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:Hello@bharvathkumar.com">Hello@bharvathkumar.com</a>
        </div>
        <div>
        <a href="tel:+919043504370"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919043504370">(+91) 9043504370</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}