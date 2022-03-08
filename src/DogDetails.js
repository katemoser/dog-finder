import { useParams } from "react-router-dom";
import "./DogDetails.css";

/**Dog details --> displays photo and facts for each dog
 * 
 * props: dogs (an array of dog objects)
 * 
 * state: None
 * 
 */
function DogDetails({ dogs }) {
    const params = useParams();
    const dogName = params.name;
    //TODO: REFACTOR FOR FIND
    const dog = dogs.filter(dog => dog.name === dogName)[0];
    return (
        <div className="DogFinder-Details">
            <img src={`/${dog.src}.jpg`} alt="A dog" />
            <div className="info">
                <p><b>Name: </b> {dog.name}</p>
                <p><b>Age: </b> {dog.age}</p>
                <b>Facts: </b>
                <ul>
                    {dog.facts.map((fact, i) => <li key={i}>{fact}</li>)}
                </ul>
            </div>

        </div>
    )
}

export default DogDetails;