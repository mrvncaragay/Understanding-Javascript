import React, { useState, useEffect } from 'react';
//import useInputState from './hooks/useFormState';
import axios from 'axios';


const SimpleForm = function() {

    //const [email, updateEmail, reset] = useInputState("email...")
    //const [password, updatePassword, resetPassword] = useInputState("password...")

    const [count, setCount] = useState(0);
    const [movie, setMovie] = useState(0);
    
    useEffect(() => {

        async function getData() {
            const ranDOm = Math.floor(Math.random() * 5)
            const response = await axios.get(`https://swapi.co/api/films/${ranDOm}`);
            setMovie(response.data.title);
            console.log('rendered')
        }

        getData();
    }, [count]);

    return (
        <div>
            {/* <h2>The value is... {email}</h2>
            <h2>The value is... {password}</h2>
            <input type="text" value={email} onChange={updateEmail}/>
            <input type="text" value={password} onChange={updatePassword}/>
            <button onClick={reset}>Reset</button> */}

            <h2>Count: {count}</h2>
            <h2>Movie: {movie}</h2>
            <button type="text" onClick={ () => setCount(count + 1) }>Increment</button>

        </div>
    )
}

export default SimpleForm;
