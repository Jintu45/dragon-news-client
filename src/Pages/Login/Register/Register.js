
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target ;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
            form.reset()
            updateUserprofileHandle(name, photoURL)
            handleEmailVerification()
            toast.success('please verify you email address.')
        })
        .catch(e => {
            setError(e.message)
        })
    }

    const handleAccept = event => {
        setAccepted(event.target.checked)
    }
    const updateUserprofileHandle = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL : photoURL,
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => {
            console.log(error)
        })
    }
    const handleEmailVerification = () => {
        verifyEmail()
        .then(result => {})
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='text-start'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control type='text' name='name' placeholder='type your name' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <span className='mb-3 text-danger'>{error}</span><br/>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                onClick={handleAccept}
                label= {<>accept <Link to='/terms'>Terms and condition</Link>
                 </>} />
            </Form.Group>
            <Button className='mt-3' variant="primary" type="submit" disabled ={!accepted}>
                Register
            </Button>
        </Form>
        </div>
    );
};

export default Register;