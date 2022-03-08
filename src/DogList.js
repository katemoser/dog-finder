import { Link } from "react-router-dom";

/**Dog List --> displays the name and photo of each dog
 * 
 * props: dogs (list of dogs)
 * 
 * state: None
 * 
 */
function DogList({ dogs }) {
    return (
        <div>
            {dogs.map(dog =>
                <div key={dog.name}>
                    <Link to={`dogs/${dog.name}`}>
                        <img src={`${dog.src}.jpg`} alt="A dog" />
                    </Link>
                    {dog.name}
                </div>)}
        </div>
    )

}

export default DogList;