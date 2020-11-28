import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import Auth from './Auth'
import Man from './Man'
import Filter from './Filter'
import Location from './Location'
import Rating_up from './Rating_up'
import Price_dsc from './Price_dsc'
import Price_asc from './Price_asc'

import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import Jaipur from './Jaipur';
import Delhi from './Delhi';
import Dehradun from './Dehradun';
import Shimla from './Shimla';
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>

      <Switch>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/price_dsc">
          <Price_dsc/>
        </Route>
        <Route path="/price_asc">
          <Price_asc/>
        </Route>
        <Route path="/rating_up">
          <Rating_up/>
        </Route>
        <Route path="/filter">
          <Filter/>
        </Route>
        <Route path="/jaipur">
          <Jaipur/>
        </Route>
        <Route path="/delhi">
          <Delhi/>
        </Route>
        <Route path="/dehradun">
          <Dehradun/>
        </Route>
        <Route path="/shimla">
          <Shimla/>
        </Route>
        <Route path="/location">
          <Location/>
        </Route>
       {/* <Route path='/auth' component={Auth} />
        <Route path='/main' component={Man} />
  <Redirect to='/auth' from='*' />  */}
  <Route path="/"> 
         {/*  <Filter/> */}
        <Man/> 
        </Route>
      </Switch> 
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
