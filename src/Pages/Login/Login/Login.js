import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate,  } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const {signIn, setLoading} = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation()
    
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password) 
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            setError('')
            if(user.emailVerified){

                navigate(from, {replace: true})
            }
            else{
                toast.error('Your email is not verify. please verify your email.')
            }
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    return (
       <div className='text-start'>

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <span className='mb-3 text-danger'>{error}</span><br/>
            <Button className='mt-3' variant="primary" type="submit">
                Login
            </Button>
            
        </Form>

       </div>

    );
};

export default Login;