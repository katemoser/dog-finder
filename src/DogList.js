import { Link } from "react-router-dom";
import "./DogList.css";

/**Dog List --> displays the name and photo of each dog
 * 
 * props: dogs (list of dogs)
 * 
 * state: None
 * 
 */
function DogList({ dogs }) {
    return (
        <div className="DogFinder-List">
            {dogs.map(dog =>
                <div className="DogFinder-Dog" key={dog.name}>
                    <Link to={`dogs/${dog.name}`}>
                        <img src={`${dog.src}.jpg`} alt="A dog" />
                    </Link>
                    {dog.name}
                </div>)}
        </div>
    )

}

export default DogList;