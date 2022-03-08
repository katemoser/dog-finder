import './App.css';
import axios from "axios";
import { useState } from 'react';
import Routes from './Routes';
import Nav from "./Nav";
import { BrowserRouter } from 'react-router-dom';

const DOGS_API_URL = 'http://localhost:5000/dogs';
const PRACTICE_DOGS = [
  {
    "name": "Whiskey",
    "age": 5,
    "src": "whiskey",
    "facts": [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    "name": "Duke",
    "age": 3,
    "src": "duke",
    "facts": [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    "name": "Perry",
    "age": 4,
    "src": "perry",
    "facts": [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  }
];
/**
 * App for displaying information about dogs.
 * 
 * Props: None
 * 
 * State: dogs (list of dog objects)
 * 
 * Hierarchy -> QUESTION: How does this work with routes?
 *              FOLLOWUP QUESTION: How do i make a component hierarchy/architecure with routes?
 * app -> nav
 *     -> Routes
 */
function App() {

  const [dogs, setDogs] = useState([]);

  async function getAndSetDogs() {
    let response = await axios.get(DOGS_API_URL);
    setDogs(response.data);
  }

  if (dogs.length === 0) {
    getAndSetDogs();
    return <p> Loading... Get ready for dogs</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes dogs={dogs} />
      </BrowserRouter >
    </div>
  )
}

export default App;
