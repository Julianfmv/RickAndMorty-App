import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div>
            <h1>Welcome to my Rick and Morty project!!</h1>
            <button>
                <Link to='/home' >ENTER</Link>
            </button>
        </div>
    )
}


export default Landing;