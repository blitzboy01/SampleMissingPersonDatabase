
import Navbar from "../components/navbar";
import FooterLink from "../components/footerLink";

export default function  ContactPage() {
    return(
        <div>
            <Navbar />
            <div style={{padding: "20px"}}>
            <h1>Contact Us</h1>
            <p>If you have any questions, suggestions, or need assistance, please reach out to us at:</p>
            <ul>
                <li>Email:
                    <a href="mailto:guineverebelmi@gmail.com">Email Address</a>
                </li>
                <li>Phone: 9123456789</li>
                <li>Address: Philippines</li>
            </ul>
            <p>We are here to help and support you in any way we can. Your feedback is important to us!</p>
            </div>
            <FooterLink/> 
        </div>
    );}