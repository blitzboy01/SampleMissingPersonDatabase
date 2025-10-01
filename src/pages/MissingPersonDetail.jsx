import React, { useState } from "react";
import { useParams } from "react-router-dom";
import missingPersons from "../data/missingPersons";
import "../styles/missing-person-detail.css";
import Navbar from "../components/navbar";
import PageTitle from "../components/PageTitle";

const tabs = ["Case", "Videos", "Contacts"];

function MissingPersonDetail() {
  const { id } = useParams();
  const person = missingPersons.find(p => String(p.id) === id);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  if (!person) return <div>Person not found</div>;

  return (
    <div className="missing-person-detail">
      <PageTitle title={`Missing Person Database - ${person.name || 'Unknown'}`} />
      <Navbar />
        <div className="person-header">
            <img src={person.img} alt="missing person" />0
            <div>
            <div className="person-id">Missing Person /ID #{person.id}</div>
            <div className="person-name">{person.name||'Name Unknown'}, {person.gender||'Prefer not to say'}</div>
            </div>
        </div>
        <div className="quick-info">
            <div className="quick-info-item">Date of Last Contact: {person.lastContact||person.lastSeen||'N/A'}</div>
            <div className="quick-info-item">Missing From: {person.missingFrom ||'N/A'}</div>
            <div className="quick-info-item">Missing Age:{person.missingAge||person.age||'N/A'}</div>
            <div className="quick-info-item"> Current Age: {person.currentAge||person.age||'N/A'}</div>
        </div>

       <div className="tabs-container">
         {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === "Case" && (
        <div className="tab-content">
          <h2>Case Information</h2>
          <div>
            <div>
              <h3>Demographics</h3>
              <div>Missing Age: {person.missingAge || person.age || "N/A"}</div>
              <div>Current Age: {person.currentAge || person.age || "N/A"}</div>
              <div>Legal First Name: {person.name || "N/A"}</div>
              <div>Legal Last Name: {person.lastName || "N/A"}</div>
              <div>Biological Sex: {person.gender || "N/A"}</div>
              <div>Height: {person.height || "N/A"}</div>
              <div>Weight: {person.weight || "N/A"}</div>
              <div>Race / Ethnicity: {person.race || "N/A"}</div>
            </div>
            <div>
              <h3>Circumstances</h3>
              <div>Date of Last Contact: {person.lastContact || person.lastSeen || "N/A"}</div>
              <div>Location: {person.missingFrom || "N/A"}</div>
              <div>City: {person.City || "N/A"}</div>
              <div>Circumstances of Disappearance: {person.circumstances || "N/A"}</div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Videos" && (
        <div className="tab-content">
          <h2>Videos</h2>
          <div>No videos available.</div>
        </div>
      )}
      {activeTab === "Contacts" && (
        <div className="tab-content">
          <h2>Contacts</h2>
          <div>Contact Number:{person.contact}</div>
        </div>
      )}
    </div>
  );

//       {/* Tab Content */}

}
export default MissingPersonDetail;