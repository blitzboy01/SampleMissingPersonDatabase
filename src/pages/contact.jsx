
import Navbar from "../components/navbar";
import FooterLink from "../components/footerLink";
import '../styles/contact.css';

export default function  ContactPage() {
    return(
        <div>
            <Navbar />
            <div className="contact-section">
                <h1 className="contact-heading">Contact Us</h1>
                <p className="contact-description">
                If you have any questions, suggestions, or need assistance, please feel free to reach out. We're here to help!
                </p>
                <div className="contact-details">
                    <p>Email:</p>
                    <a href="mailto:testing@gmail.com">a</a>

                </div>


            </div>

            <FooterLink/> 
        </div>
    );}