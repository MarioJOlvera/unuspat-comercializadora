import React, { Component } from 'react'
import { Button } from '../Button'
import { MenuItems } from './MenuItems'
import { AiOutlineShopping } from 'react-icons/ai'
import './Navbar.css'
import logo_unuspat from '../../CSS/Media/logo_unuspat_arts.png'


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <img src={logo_unuspat} alt='logo_unuspat' width='225' height='95'></img>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.href}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul> 
                <Button>ACCEDER</Button>
                <AiOutlineShopping className='fa-shopping-bag'></AiOutlineShopping>
            </nav>
        )
    }
}

export default Navbar 