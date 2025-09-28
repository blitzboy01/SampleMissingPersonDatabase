import { useEffect } from "react";
import "./App.css";

const missingPeople = [
  {
    img: "https://placehold.co/150x180?text=1",
    age: 27,
    eyes: "Brown",
    hair: "Black",
    height: "5′6″",
    weight: "130 lbs",
    lastSeen: "2023-10-01",
  },
  {
    img: "https://placehold.co/150x180?text=2",
    age: "34",
    eyes: "Blue",
    hair: "Blonde",
    height: "5′9″",
    weight: "150 lb",
    lastSeen: "Jan 2024",
  },
  {
    img: "https://placehold.co/150x180?text=3",
    age: "34",
    eyes: "Blue",
    hair: "Blonde",
    height: "5′9″",
    weight: "150 lb",
    lastSeen: "Jan 2024",
  },
  {
    img: "https://placehold.co/150x180?text=4",
    age: "34",
    eyes: "Blue",
    hair: "Blonde",
    height: "5′9″",
    weight: "150 lb",
    lastSeen: "Jan 2024",
  },
];

export function setActiveLink(currentPath) {
  const links = document.querySelectorAll("nav.main-nav a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes(currentPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

export function createCard(person) {
  return (
    <div className="missing-person-card">
      <div className="missing-person-title">Missing Person</div>
      <div className="missing-person-image-container">
        <img
          src={person.img}
          alt="mssing person"
          className="missing-person-image"
        />
        <div className="missing-person-description">
          <div className="missing-person-age">Age: {person.age}</div>
          <div className="missing-person-eyes">Eyes: {person.eyes}</div>
          <div className="missing-person-hair">Hair: {person.hair}</div>
          <div className="missing-person-height">Height: {person.height}</div>
          <div className="missing-person-weight">Weight: {person.weight}</div>
          <div className="missing-person-last-seen">
            Last Seen: {person.lastSeen}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const currentPage = window.location?.pathname?.slice(1) || "home";
  useEffect(() => {
    setActiveLink(currentPage);
  }, [currentPage]);
  return (
    <>
      <head>
        <title>Guinevere Belmi Project</title>
      </head>
      <nav className="main-nav">
        <a href="/home">
          Home
        </a>
        <a href="/about">
          About
        </a>
        <a href="/contact">
          Contact
        </a>
      </nav>

      <div className="card-container">
        {missingPeople.map((person) => createCard(person))}
      </div>
    </>
  );
}
