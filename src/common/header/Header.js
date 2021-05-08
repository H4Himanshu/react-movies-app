import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'

class Header extends Component {
    render() {
        return (
            // <div className="header-comp">
            //     <header className="app-header">
            //         <div class="container">
            //             <img src={logo} className="app-logo" alt="logo"></img>
            //             <Button variant="contained" color="default">
            //                                 Login
            //                             </Button>
            //         </div>
            //     </header>
            // </div>
            <nav>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo"></img>
                    <ul>
                        <li>
                            <Button variant="contained" color="default">
                                Login
                        </Button>
                        </li>
                    </ul>
                </header>
            </nav>
        )
    }
}

export default Header;