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
import FormHelperText from '@material-ui/core/FormHelperText';
import ReactDOM from 'react-dom';
import BookShow from '../../screens/BookShow/BookShow';

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

const initialState = {
    modelIsOpen: false,
    value: 0,
    usernameRequired: "dispNone",
    passwordRequired: "dispNone",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    registerpassword: "",
    email: "",
    contactnumber: "",
    firstNameRequired: "dispNone",
    lastNameRequired: "dispNone",
    emailRequired: "dispNone",
    registerPasswordRequired: "dispNone",
    contactNumberRequired: "dispNone"
}

TabContainer.props = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    openModalHandler = () => {
        this.setState({ modelIsOpen: true })
    }

    closeModalHandler = () => {
        this.setState({ modelIsOpen: false })
        this.resetStateHandler()
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstNameRequired: "dispBlock" }) : this.setState({ firstNameRequired: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastNameRequired: "dispBlock" }) : this.setState({ lastNameRequired: "dispNone" });
        this.state.registerpassword === "" ? this.setState({ registerPasswordRequired: "dispBlock" }) : this.setState({ registerPasswordRequired: "dispNone" });
        this.state.contactnumber === "" ? this.setState({ contactNumberRequired: "dispBlock" }) : this.setState({ contactNumberRequired: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    inputFirstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value });
    }

    inputLastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value });
    }

    inputRegisterPasswordChangeHandler = (e) => {
        this.setState({ registerpassword: e.target.value });
    }

    inputEmailChangeHandler = (e) => {
        this.setState({ email: e.target.value });
    }

    inputContactNumberChangeHandler = (e) => {
        this.setState({ contactnumber: e.target.value });
    }

    resetStateHandler = () => {
        this.setState(initialState);
    }

    bookShowHandler = (e) => {
        ReactDOM.render(<BookShow />, document.getElementById('root'));
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo"></img>
                    <ul style={{display: 'inline-flex'}}>
                        <li style={{position: 'relative', left: '88%'}}>
                            <Button variant="contained" color="default" onClick={this.openModalHandler}> Login</Button>
                        </li>
                        <li style={{position: 'relative', left: '90%'}}>
                            {this.props.showBookShowButton === "true" ?
                                <Button variant="contained" color="primary" onClick={this.bookShowHandler}>
                                    Book Show
                            </Button>
                                : ""}
                        </li>
                    </ul>

                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modelIsOpen} content="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="userName">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}></Input>
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer>
                    }
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}></Input>
                                <FormHelperText className={this.state.firstNameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}></Input>
                                <FormHelperText className={this.state.lastNameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="email" >Email</InputLabel>
                                <Input id="email" type="email" email={this.state.email} onChange={this.inputEmailChangeHandler}></Input>
                                <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="registerpassword">Password</InputLabel>
                                <Input id="registerpassword" type="password" registerpassword={this.state.registerpassword} onChange={this.inputRegisterPasswordChangeHandler}></Input>
                                <FormHelperText className={this.state.registerPasswordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="contactNumber" >Contact Number</InputLabel>
                                <Input id="contactnumber" type="text" pattern="[789][0-9]{9}" maxlength="10" contactnumber={this.state.contactnumber} onChange={this.inputContactNumberChangeHandler}></Input>
                                <FormHelperText className={this.state.contactNumberRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>

        )
    }
}

export default Header;