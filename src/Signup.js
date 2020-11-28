import React, { useState } from 'react'
import './Signup.css';
import { auth } from './Firebase';
import { useHistory } from 'react-router-dom';
import {database} from './Firebase'

function SignUp() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let flag=0
    const signUp = () => {
    
            database.ref('person/' + email).set({
             password:password
            });
           history.push('/main');
        }
          
       
    
    return (
        <div className='signUp'>
            <h1>Register your account</h1>
            <input type='text' placeholder='Enter your Username' onChange={e => setEmail(e.currentTarget.value)} />
            <input type='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)} />
            <button onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default SignUp