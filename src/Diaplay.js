import React, {useState} from 'react'
import firebase from 'firebase'
const AddTimeEntryForm=()=>{
    const[title,SetTitle]= useState('')
    const[pri,setPrice]=useState('')
    function onSubmit(e){
        e.preventDefafult()
        firebase.firestore().collection('users').add({title,price: parseInt(pri)})
        .then(()=>{
            SetTitle('')
            setTimeout('')
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="text" value={title} onChange={e=> SetTitle(e.currentTarget.value)}/>
            <input type="number" value={pri} onChange={e=> SetTitle(e.currentTarget.value)}/>
            <button>Add</button>
        </form>
    )
}

export default AddTimeEntryForm