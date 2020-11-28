import React, { useEffect } from 'react'
import './Man.css';
import { auth } from './Firebase';
import { useHistory } from 'react-router-dom';
import Home from './Home'
import Database from './Database.js'

function Main() {
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) history.push('/auth');
        })
    })
    const history = useHistory();

    const logOut = () => {
        auth.signOut().then(res => {
            history.push('/auth');
            //do something else with res
        }).catch(err => {
            //do something else with err
        })
    }

    return (
        <div className='main'>
            <Database/>
            <Home/>
        </div>
    )
}

export default Main
