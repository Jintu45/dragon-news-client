import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='mb-3'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><Link to ='/'>Dragon news</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">All news</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-2'>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="outline-secondary">Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'> <Button variant="outline-info" className='me-2'>Login</Button></Link>
                                        <Link to='/register'><Button variant="outline-success">Register</Button></Link>
                                    </>
                            }


                        </>
                    </>
                <Link to='/profile'>
                    {
                        user?.photoURL ?
                        <Image roundedCircle style={{height: "40px"}} src={user.photoURL}></Image> :
                       <FaUser></FaUser>
                    }
                </Link>
                    {/* <img src={user?.photoURL} alt="" /> */}
                </Nav>
                <div className='d-lg-none'>
                    <LeftSideNav></LeftSideNav>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;