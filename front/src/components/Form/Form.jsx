import { useState } from "react";
import validate from "./validate";

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    
    return(
        <div className="form__container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" style={{ color:'black' }} >Username:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username && <p style={{color: 'red'}} >{errors.username}</p>}

            <label htmlFor="password" style={{ color:'black' }}>Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}

            <button>LOGIN</button>
        </form>
        </div>
    )
}

export default Form;