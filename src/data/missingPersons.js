import { v4 as uuidv4 } from 'uuid';

const missingPersons = [
  {
    id: uuidv4(),
    img: "https://placehold.co/150x180?text=1",
    age: "27",
    eyes: "Brown",
    hair: "Black",
    height: "5′6″",
    weight: "130 lb",
    lastSeen: "June 2023",
    name:'Jane Doe'
  },
  {
    id: uuidv4(),
    img: "https://placehold.co/150x180?text=2",
    age: "34",
    eyes: "Blue",
    hair: "Blonde",
    height: "5′9″",
    weight: "150 lb",
    lastSeen: "Jan 2024",
    name:'John Smith'
  },
  {
    id: uuidv4(),
    img: "https://placehold.co/150x180?text=3",
    age: "34",
    eyes: "Blue",
    hair: "Blonde",
    height: "5′9″",
    weight: "150 lb",
    lastSeen: "Jan 2024",
    name:'Alice Johnson'
  },
  {
    id: uuidv4(),
    img: "https://placehold.co/150x180?text=4",
    age: "34",
    eyes: "Blue",
    hair: "Blonde",
    height: "5′9″",
    weight: "150 lb",
    lastSeen: "Jan 2024",
    name:'Bob Brown'
  },
];

export default missingPersons;
