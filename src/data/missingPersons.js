import { v4 as uuidv4 } from 'uuid';

const missingPersons = [
  {
    id: uuidv4(),
    img: "https://placehold.co/150x180?text=1",
    age: "13",
    eyes: "Brown",
    hair: "Black",
    height: "5′6″",
    weight: "130 lb",
    lastSeen: "June 2023",
    name:'Jane Doe',
    gender:'Female',
    contact:'(555) 123-4567',
    missingFrom:'Springfield, IL',
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
    name:'John Smith',
    gender:'Male',
    contact:'(555) 987-6543',
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
    name:'Alice Johnson',
    gender:'Female',
    contact:'(555) 555-5555',
  },

];

export default missingPersons;
