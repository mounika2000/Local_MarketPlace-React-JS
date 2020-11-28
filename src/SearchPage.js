import React ,{useEffect,useState}from 'react';
import './SearchPage.css';
import {database} from './Firebase'
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { BrowserRouter , Link, Switch, Route } from "react-router-dom";
function SearchPage() {
    const [state,setState]=useState([])


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
                    location:words[i].location,
                    rating:words[i].rating,
                    price:words[i].price
                });
              }
               
            setState(newState)
        })

    },[]);
    
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>6 results</p>
                <h1>Markets to hunt</h1>
                <Button variant="outlined">Location</Button>
               
                <Button variant="outlined"><Link to="/Price_asc" >Price</Link></Button>
                <Button variant="outlined"><Link to="/Rating_up" >Rating</Link></Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {state.map((word)=>{
                return(
                    <SearchResult
                    img={word.src}
                    location={word.location}
                    title={word.title}
                    description={word.description} 
                    star={word.rating}
                    price="price"
                    total={"₹"+word.price}
                />
                )
            })}
            {/*<SearchResult
                img="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/01/India-153.jpg"
                location="Paharganj Main Bazaar, opposite the New Delhi Railway Station"
                title="Paharganj"
                description="Some of the best bargain shopping in Delhi can be found in the crumbling and chaotic Main Bazaar of Paharganj. Many of the shops in Paharganj also deal in wholesale and export to foreign countries, making it a good place to come and hunt out unique and inexpensive goods to import back home."
                star={3.85}
                price="price"
                total=""
            />
            <SearchResult
                img="https://imgmedia.lbb.in/media/2017/07/597767e4a5fac2666ed20158_594abe48c3eb7d0fde701a43_1500997604989.jpg"
                location="Janpath, just off Connaught Place, in New Delhi"
                title="JanPath"
                description="This very popular and lively Delhi market has something for everyone. You'll find goods from everywhere in India and Tibet here, and it's a great place to shop for things to take back home. However, you'll need all your bargaining skills to get a really decent price."
                star={4.3}
                price="price"
                total=""
            />

            <SearchResult
                img="https://static.businessworld.in/article/article_extra_large_image/1479816467_R3hLxP_khanmarket.jpg"
                location="New Delhi, not far from India Gate"
                title="Khan Market"
                description=" Khan Market is a small U-shaped market that's one of Delhi's classiest. It's got a loyal following who go there to shop at its branded outlets. One of the best things about this market is its interesting book shops. It's also got some excellent tailors who will make you a suit in less than a week."
                star={3.8}
                price="price"
                total=""
            />
            <SearchResult
                img="https://www.thestatesman.com/wp-content/uploads/2018/07/Connaught-place-office-space.jpg"
                location="Cannaught Place,Near Rajeev Chowk Metro station, Delhi"
                title="Cannaught Place"
                description="Connaught Place is a frenetic business and financial hub, centered on a ring of colonnaded Georgian-style buildings with global chain stores, vintage cinemas, bars and Indian restaurants. Stalls at Janpath Market sell saris, embroidered bags and trinkets."
                star={4.23}
                price="price"
                total=""
            />
            <SearchResult
                img="https://lh3.googleusercontent.com/mZSQ6ozg7egja7OaBLeK3IvBd_05PiLpLPvumHQ_OcfsqrBkqH3oem3zkffmTEux4CnLnwPxpOHqThaf_KNiFtBn8w=w1000"
                location="Old Delhi"
                title="Chandini Chowk"
                description="The shopping district of Chandni Chowk has been in existence for hundreds of years and an exploration of its winding, narrow alleyways is certainly an adventure. The lanes of Chandni Chowk are divided into bazaars with different areas of specialization."
                star={4.1}
                price="price"
                total=""
            />
            <SearchResult
                img="https://m.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/17/Pictures/_9835149e-acb8-11e6-b4b4-3ed39deda4e7.JPG"
                location="Gurgaon"
                title="Tibenten Refugee Market"
                description="Its a great place to buy silver and junk jewellery and handicraft items of Ladakh. Souvenir items can as well be bought at very good bargains."
                star={5.0}
                price="price"
                total=""
            />
            
            <SearchResult
                img="https://im.whatshot.in/img/2019/Feb/image-1-1550063927.jpg"
                location="Heart of Delhi"
                title="Sarojini Market"
                description="It is most famous for its really cheap designer clothes and reputable brands that have been rejected from export, either because of surplus quantity or small manufacturing defects. Shops and stalls, selling all kinds of clothes and fashion accessories, sprawl onto the streets. "
                star={4.73}
                price="price"
                total=""
            /> */}
            
        </div>
    )
}

export default SearchPage