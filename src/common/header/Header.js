import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    );
}

TabContainer.props = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modelIsOpen: false,
            value: 0
        }
    }

    openModalHandler = () => {
        this.setState({ modelIsOpen: true })
    }

    closeModalHandler = () => {
        this.setState({ modelIsOpen: false })
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value });
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
                <Modal ariaHideApp={false} isOpen={this.state.modelIsOpen} content="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                    {this.state.value == 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="userName">Username</InputLabel>
                                <Input id="username" type="text"></Input>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="userName">Password</InputLabel>
                                <Input id="password" type="password"></Input>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary">LOGIN</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>

        )
    }
}

export default Header;