
import Navbar from "../components/navbar";
import PageTitle from "../components/PageTitle";
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
                    <a href="mailto:"></a>
                </li>
                <li>Phone: </li>
                <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
            <p>We are here to help and support you in any way we can. Your feedback is important to us!</p>
            </div>
            <FooterLink/> 
        </div>
    );}