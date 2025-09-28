
import Navbar from "../components/navbar";
import '../index.css';
import MissingPersonCard from "../components/MissingPersonCard";
import missingPersons from "../data/missingPersons";


export default function Dashboard() {
    return (
        <div>
            <Navbar />

            <div className="dashboard-wrapper">
                <div className="cards-wrapper">
                    {missingPersons.map(person => (
                        <MissingPersonCard key={person.id} person={person} />
                    ))}
                </div>
            </div>
            </div>
    );
}