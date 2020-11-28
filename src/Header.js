import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { BrowserRouter , Link, Switch, Route } from "react-router-dom";
import { ReactComponent as Search_Icon } from './icons/search.svg';
import logo from './logo.png';
import red_logo from './download.png';
import { ReactComponent as Event } from './icons/calendar.svg';
import { ReactComponent as Delhi } from './icons/new-delhi.svg';
import { ReactComponent as Shimla} from './icons/shimla.svg';
import { ReactComponent as Dehradun } from './icons/dehradun.svg';
import { ReactComponent as Jaipur } from './icons/jaipur.svg';
import { ReactComponent as User } from './icons/user (2).svg';
import { ReactComponent as Placeholder } from './icons/placeholder.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import SearchPage from './SearchPage';

function Header() {
  const [search, setSearch] = React.useState('');

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src={logo}
                    alt=""
                />
            </Link>    
           

           
            <Navbar>
            <div >
                <p></p>
               
                {/*<input type="text" onChangeText={text => setSearch(text)} />
                <NavItem icon={<SearchIcon />} /> */}
            </div>
            <NavItem icon={<Search_Icon />}><DropdownMenu></DropdownMenu> </NavItem>
            <NavItem icon={<PlusIcon />} />
            
            <NavItem icon={<User />} />

            <NavItem icon={<SearchIcon />}>
            <DropdownMenu></DropdownMenu>
            </NavItem>
            </Navbar>
        </div>
    )
}
function Navbar(props) {
    return (
      <nav className="navbar">
        <div className='search'></div>
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }
  
  function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
  }
  
  export function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
     
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
     
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem  leftIcon={<User />}>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<Event />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              Events
            </DropdownItem>
            <DropdownItem
              leftIcon={<Placeholder />}
              goToMenu="animals">
              Locations
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>My Tutorial</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<Placeholder />}>Concerts</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Exhibitions</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Art Gallery</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Markets</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Locations</h2>
            </DropdownItem>
            <Link to="/delhi"><DropdownItem  leftIcon={<Delhi />}>Delhi</DropdownItem></Link>
            {/*onClick={() => setSearch("Delhi")} */}
            <Link to="/shimla" ><DropdownItem  leftIcon={<Shimla />}>Shimla </DropdownItem></Link>
            <Link to="/dehradun" ><DropdownItem leftIcon={<Dehradun />}>Dehradun</DropdownItem></Link>
            <Link to="/jaipur" ><DropdownItem leftIcon={<Jaipur />}>Jaipur</DropdownItem></Link>
            
          </div>
        </CSSTransition>
       
             
      </div>
      
    );
  }
export default Header