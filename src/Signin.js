
import React, { useState } from 'react'
import { auth } from './Firebase';
import { useHistory } from 'react-router-dom';
import './Signin.css';
import {database} from './Firebase'
function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let flag=0

    const signIn = () => {
        const wordRef=database.ref('person')
        wordRef.on('value',(snapshot)=>{
            let words=snapshot.val();
            //console.log(words)
            for (let i in words){
                //console.log(i)
                if(i===email && password===words[i].password){
                    flag=1
                    history.push('/main');

                }
            }
            if(flag==0){
                alert('Invalid Username or Password')
            }
        
        })
        
        //auth.signInWithEmailAndPassword(email, password).then(res => {
            //history.push('/main');
            //do something else with the response
        //}).catch(err => {
            //do something with the error
        //})
    }

    return (
        <div className='signIn'>
            <h1>Sign in to your account</h1>
            <input className='input' type='text' placeholder='Enter your Username' value={email} onChange={e => setEmail(e.currentTarget.value)} />
            <input className='input' type='password' placeholder='Enter your Password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <button className='button' onClick={signIn}>Sign In</button>
        </div>
    )
}

export default SignIn