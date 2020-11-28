import React , {useState, useEffect} from 'react'
import firebase from 'firebase'
import { db,auth, database } from './Firebase'
import './Filter.css'
import SearchResult from "./SearchResult";
import SearchPage from "./SearchPage";
import AddTimeEntryForm from './Diaplay'
const SORT_OPTIONS={
    'PRICE_ASC':{column: 'price',direction:'asc'},
    'PRICE_DESC': {column:'price', direction:'desc'},
    'RATING': {column:'rating', direction:'desc'}
}




function Location(sortBy='PRICE_ASC') {
    const  [times, setTimes]= useState([    ])
    useEffect(() =>{
        const unsubcribe= firebase.firestore().collection('users')
        .orderBy(SORT_OPTIONS[sortBy].column,SORT_OPTIONS[sortBy].direction)
        .onSnapshot((snapshot)=>{
            const newTimes =snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            setTimes(newTimes)
        })
        return ()=> unsubcribe()
    },[sortBy])
    return times
}



const TimesList=()=>{
    const [sortBy, setSortBy]= useState('RATING')
    const times=Location(sortBy)
    return (
        <div>
            <h2>
                List
            </h2>
            <div>
                <label>Sort by</label>{' '}
                <select value={sortBy} onChange={e=> setSortBy(e.currentTarget.value)}>
                    <option value="RATING">Rating Hight to low</option>
                    <option value="PRICE_ASC"> Price Low to High</option>
                    <option value= "PRICE_DESC"> Price High to low</option>
                </select>
            </div>
            <ol>
                {times.map((time)=>
                <li key={time.id}>
                    <div className="time-entry">
                        {time.title}
                    </div>
                </li>)}
            </ol>
            <AddTimeEntryForm/>
        </div>
    )
}
export default TimesList