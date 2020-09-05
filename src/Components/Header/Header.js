import React , {useState} from 'react'
import './Header.css'
import {Menu,Search,VideoCall,Apps,Notifications} from '@material-ui/icons';
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'

function Header() {
    const [inputSearch,setInputSearch] = useState('');
    return (
        <div className="header">
                <div className="header__left">
                    <Menu className="header__icon"/>
                    <Link to="/">
                        <img 
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/100px-YouTube_Logo_2017.svg.png" 
                        alt=""/>
                    </Link>
                </div>

            <div className="header__input">
                <input value={inputSearch} placeholder="Search" type="text" onChange={e=>setInputSearch(e.target.value)}/>
                <Link to={`/search/${inputSearch}`}>
                    <Search className="header__inputButton"/>
                </Link>
            </div>

            <div className="header__icons">
                <VideoCall className="header__icon"/> 
                <Apps className="header__icon"/>
                <Notifications className="header__icon"/>
                <Avatar 
                alt="harel-digit"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQF2rTUSbWL9cw/profile-displayphoto-shrink_100_100/0?e=1604534400&v=beta&t=taUOKvmqyDhAFv8OU1YmZTI-BraVkfwOo7TaY6wERJM"/>
            </div>
        </div>
    )
}

export default Header
