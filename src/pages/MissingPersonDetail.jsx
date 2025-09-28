import React, { useState } from "react";
import { useParams } from "react-router-dom";
import missingPersons from "../data/missingPersons";

const tabs = ["Case", "Videos", "Contacts"];

function MissingPersonDetail() {
  const { id } = useParams();
  const person = missingPersons.find(p => String(p.id) === id);
  const [activeTab, setActiveTab] = useState("Case");

  if (!person) return <div>Person not found</div>;

  return (
    <div>
      {/* Header */}
      <div>
        <img src={person.img} alt="missing person" />
        <div>
          <div>Missing Person / ID #{person.id}</div>
          <div>{person.name || "Name Unknown"}, {person.gender || "Gender"}, {person.race || "Race"}</div>
          <div>
            <div>Date of Last Contact: {person.lastContact || person.lastSeen || "N/A"}</div>
            <div>Missing From: {person.missingFrom || "N/A"}</div>
            <div>Missing Age: {person.missingAge || person.age || "N/A"}</div>
            <div>Current Age: {person.currentAge || person.age || "N/A"}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Case" && (
        <div>
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
              <div>County: {person.county || "N/A"}</div>
              <div>Primary Residence on Tribal Land: {person.tribalLand || "N/A"}</div>
              <div>Circumstances of Disappearance: {person.circumstances || "N/A"}</div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Videos" && (
        <div>
          <h2>Videos</h2>
          <div>No videos available.</div>
        </div>
      )}
      {activeTab === "Contacts" && (
        <div>
          <h2>Contacts</h2>
          <div>No contacts available.</div>
        </div>
      )}
    </div>
  );
}
export default MissingPersonDetail;