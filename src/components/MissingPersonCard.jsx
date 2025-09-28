
import "../styles/missing-person.css";
import { Link } from "react-router-dom";

function MissingPersonCard({ person }) {
  return (
    <Link style={{textDecoration:'none'}} to={`/MissingPerson/${person.id}`}>
      <div className="missing-person-card">
        <div className="missing-person-title">Missing Person</div>
        <div className="missing-person__image-container">
          <img
            src={person.img}
            alt="missing person"
            className="missing-person__image"
          />
          <div className="missing-person__description">
            {['Name',"Age", "Eyes", "Hair", "Height", "Weight", "Last Seen"].map((label, i) => (
              <div className="description-column" key={label}>
                <div className="description-label">{label}</div>
                <div className="description-value">{
                label === 'Name' ? person.name :
                  label === "Age" ? person.age :
                  label === "Eyes" ? person.eyes :
                  label === "Hair" ? person.hair :
                  label === "Height" ? person.height :
                  label === "Weight" ? person.weight :
                  label === "Last Seen" ? person.lastSeen : ""
                }</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MissingPersonCard;
