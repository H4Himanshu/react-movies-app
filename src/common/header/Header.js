import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modelIsOpen: false
        }
    }

    openModalHandler = () => {
        this.setState({ modelIsOpen: true })
    }

    closeModalHandler = () => {
        this.setState({ modelIsOpen: false })
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo"></img>
                    <ul>
                        <li>
                            <Button variant="contained" color="default" onClick={this.openModalHandler}> Login</Button>
                        </li>
                    </ul>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modelIsOpen} content="Login" onRequestClose={this.closeModalHandler}>
                </Modal>
            </div>

        )
    }
}

export default Header;