import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'; 
import SvgLogo from './SvgLogoComponent'

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            dropdownOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-0" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <NavItem>
                                    <DropdownToggle nav>
                                    Shop
                                    </DropdownToggle>
                                    </NavItem>
                                    <DropdownMenu>
                                    <DropdownItem>                                    
                                        <NavLink className="nav-link" to="#">
                                        Classic Tea
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>                                    
                                        <NavLink className="nav-link" to="#">
                                        Tea Sets
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>                                    
                                        <NavLink className="nav-link" to="/customize">
                                        Customize Your Own Tea Blend
                                        </NavLink>
                                    </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Nav>
                            <Link to='/home' className="mx-auto">
                                <SvgLogo id="navlogo"/>
                            </Link>    
                            <span className="navbar-text mr-0">
{/*                                 <Button>
                                    <i className="fa fa-search fa-lg" /> Search
                                </Button>
                                <Input /> */}
                                <Button onClick={this.toggleModal} id="login">
                                    <i className="fa fa-sign-in fa-lg" /> Login
                                </Button>
                            </span>
                        </Collapse> 
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">
                                    Username
                                </Label>
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <Input type="password" id="password" name="password" innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;