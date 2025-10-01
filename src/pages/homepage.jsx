import Navbar from "../components/navbar";
import FooterLink from "../components/footerLink";
import "../styles/homepage.css";

export default function HomePage() {
    return(
        <div>
            <Navbar />
            <div className="homepage-haiku-container">
                <section className="homepage-haiku-section">
                    <span className="haiku-line">Families still wait--</span>
                    <span className="haiku-line">Every voice brings hope closer.</span>
                    <span className="haiku-line">Help us bring them home</span>
                </section>
            </div>
            <div className="homepage-info-container">
                <div className="divider"></div>
                <section className="homepage-welcome-section">
                    <h2>Welcome to the Missing Person Database</h2>
                    <p>Your trusted resource for finding missing loved ones. We are dedicated to reuniting families and providing support during difficult times. Explore our database, share information, and help bring hope to those in need.</p>
                </section>
                <div className="divider"></div>
                <section className="homepage-mission-section">
                    <h2>How You Can Help</h2>
                    <p>Report sightings, share information on social media, and volunteer with local search efforts. Every action counts in the search for missing persons. Together, we can make a difference and bring hope to families waiting for their loved ones to return.</p>
                </section>
            </div>
            <FooterLink/>
        </div>
    );}