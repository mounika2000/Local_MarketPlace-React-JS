import React ,{useEffect,useState} from 'react'
import {database} from './Firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Card from './Card'
import Banner from './Banner'
import './Database.css'
  
  function getModalStyle() {
    const top = 50 
    const left = 50 
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      overflow: `scroll`
    
    };
  }
  function getModalStyle2() {
    const top = 50 
    const left = 50 
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      
    
    };
  }
  
const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: 'black',
      position: 'absolute',
      width: 500,
      outline:0,
      overflow:'hidden',
      fontSize: '13px',
      color: 'white',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modalStyle1:{
      
      position:'absolute',
      overflow:'hidden',
      height:'100%',
      display:'block'
    }
  }));
  
function Database() {

  const handleTitle=(event) =>{
   // console.log(event)
    settitle(event.target.value)
  } 
  const handleDecription=(event) =>{
    //console.log(event)
    setdesc(event.target.value)
  } 
  const handleSrc=(event) =>{
    //console.log(event)
    setsrc(event.target.value)
  }
  const handlePrice=(event) =>{
    //console.log(event)
    setprice(event.target.value)
  }
  const handleExp=(event) =>{
    //console.log(event)
    setexperience(event.target.value)
  }
  
  const handleLocation=(event) =>{
    //console.log(event)
    setlocation(event.target.value)
  }
  const handleRating=(event) =>{
    //console.log(event)
    setrating(event.target.value)
  }
  function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  
  
    
      const handleSubmit=(event) =>{
        handleClose()
        alert('You are Submitting a Place ' + title);
        let i=randomNumber(1,1000)
        writeUserData(i,src,title,desc,price,rating,location)
        event.preventDefault();
      }

      const clickLearn=(evt)=>{
        settitle(state[evt].title)
        setsrc(state[evt].src)
        setdesc(state[evt].description)
        setprice(state[evt].price)
        setlocation(state[evt].location)
        setrating(state[evt].rating)
        setexperience(state[evt].experience)
        setOpenLearn(true)
      }

      const handleCloseLearn=()=>{
        setOpenLearn(false)
      }
      
      
    
        const classes = useStyles();
        // getModalStyle is not a pure function, we roll the style only on the first render
        const [modalStyle] = React.useState(getModalStyle);
        const [modalStyle2]= React.useState(getModalStyle2);
        const [open, setOpen] = React.useState(false);
        const [openLearn,setOpenLearn]=React.useState(false);
        const [name,setname] =useState("")
        const [title,settitle] =useState("")
        const [desc,setdesc] =useState("")
        const [src,setsrc] =useState("")
        const [price,setprice] =useState("")
        const [rating,setrating] =useState("")
        const [location,setlocation] =useState("")
        const [experience,setexperience] =useState("")
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

      
      
       
    const [state,setState]=useState([])
    const writeUserData=(userId,src,title,description,price,rating,location,experience)=> {
        database.ref('users/' + userId).set({
          src:src,
          title:title,
          description:description,
          price:price,
          rating:rating,
          location:location,
          experience:experience
        });
      }

    useEffect(()=>{
        const wordRef=database.ref('users')
        wordRef.on('value',(snapshot)=>{
            let words=snapshot.val();
            //console.log(words)
            let newState=[]
            for (let i in words){
              //console.log(i)
                newState.push({
                    title:words[i].title,
                    src:words[i].src,
                    description:words[i].description,
                    rating:words[i].rating,
                    price:words[i].price,
                    location:words[i].location,
                    experience:words[i].experience
                });
              }
               //console.log(newState)
            setState(newState)
        })

    },[]);
    
    return (
        <div>
          <Banner />
            <div className='addbtn'>
             <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add Place
      </Button>
      </div>
      <Modal
              open={openLearn}
              onClose={handleCloseLearn}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className={classes.modalStyle1}
            >
             <div style={modalStyle2} className={classes.paper}>
            <h2 id="simple-modal-title">{title}</h2>
            <div className='home__section'> 
                    <div className='card'>
              <img src={src} alt=""></img>
                      <div className='card__info'>
                          <pre class="tab">Rating: {rating}/5               Price: ₹{price} </pre>
                         </div>
                          </div>
                          </div>
                          <h4>Location- {location}</h4>
                          <h6>{desc}</h6>
                          <h5>User Experience- {experience}-  </h5>
                      
          
          </div>
            </Modal>
            
                
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className={classes.modalStyle1}
            >
             <div style={modalStyle} className={classes.paper}>
               <br/>
               <br/>
               <br/>
               <br/>
            <h2 id="simple-modal-title">Add a Place</h2>
            <form onSubmit={handleSubmit}>
            <label>
              Title: </label><br/>
              <input type="text" onChange={handleTitle}/>
              <br/>
            <label> 
              Image Src:</label><br/>
              <input type="text" onChange={handleSrc}/>
              <br/>
            <label>
              Description: </label><br/>
              <input type="text" onChange={handleDecription}/>
              <br/>
              <label> 
              Location:</label><br/>
              <input type="text" onChange={handleLocation}/>
              <br/>
              <label> 
              Rating</label><br/>
              <input type="number" onChange={handleRating}/>
              <br/>
              <label> 
              Price</label><br/>
              <input type="number" onChange={handlePrice}/>
              <br/><label> 
              Your Experience</label><br/>
              <input type="text" onChange={handleExp}/>
              <br/>            
            <input type="submit" value="Submit" />
            
          </form>
          </div>
            </Modal>
            <div className='home__section'>
            {state.map((word)=>{
                return(
                  <div className='home__section'> 
                    <div className='card'>
                      <img src={word.src} alt=""></img>
                      <div className='card__info'>
                          <h2>{word.title}</h2>
                          <h5>{word.description}</h5>
                          <h5 className='learn' value={word.title} onClick={()=>{clickLearn(state.indexOf(word))}}>Learn More</h5>
                      </div>
                      
        </div>
                  
                  </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Database
