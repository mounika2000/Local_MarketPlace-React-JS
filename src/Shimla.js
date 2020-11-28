import firebase from 'firebase'
import { db,auth, database } from './Firebase'
import './Filter.css'
import SearchResult from "./SearchResult";
import React from 'react'
//import {test } from './Location';
//import {search} from './Header'
//import {search} from './Header'
{/*var userRef= database.ref('users');
userRef.orderByChild("location").equalTo("Delhi").once('value',function(snapshot){
    console.log(snapshot.val())
});

 var query = firebase.database().ref("users").orderByChild("location").equalTo("Delhi");
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val()
  });
  console.log(snapshot.val())
});
*/}

class Filter extends React.Component{
    //test=this.props.location.state
    state={
        locations: null
    }
   
        
    
componentDidMount(){
   db.collection("users").get().then( snapshot =>{
        const locations=[]
        snapshot.forEach(doc =>{
            const data= doc.data()
            locations.push(data)
        })
        this.setState({locations: locations})
        console.log(locations)
    })
    
    
    
    
    const data=database.ref("users").orderByChild("location").equalTo("Shimla");
    
    data.on("value",datasnap=>{
        const locations=[]
        console.log(datasnap.val())
        datasnap.forEach(doc=>{
            const data= doc.val();
            locations.push(data)
        })
        this.setState({locations:locations})
        console.log(locations)
    })
}

render() {
        
    return (
        <div className= 'hey'>
           <p>Places to visit in Shimla</p>
           {
               this.state.locations&&
               this.state.locations.map(child=>{
                   return(
                       <div>
                          return(
                            <SearchResult
                            img={child.src}
                            location={child.location}
                            title={child.title}
                            description={child.description} 
                            star={child.rating}
                            price="price"
                            total={"₹"+child.price}
                        />
                       </div>
                   )
               })
               
           }
        </div>
    )
}
}




export default Filter