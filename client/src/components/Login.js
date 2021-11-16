import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/userActions'
import FormContainer from './FormContainer'
import { useLocation, useNavigate } from 'react-router';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1]: '/'

   useEffect(() => {
       if (userInfo) {
           navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const handleSubmit = (e) => {
        e.preventDefault()
        //dispatch login 
        dispatch(login(email, password))
      }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <h1>{error}</h1>}
            {loading && <h1>Loading</h1>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='enter email' value={email}
                        onChange= {(e)=>setEmail(e.target.value)}>
                </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='enter your password' value={password}
                        onChange= {(e)=>setPassword(e.target.value)}>
                </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>Sign In</Button>

            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}` :'/register'}>Register</Link>
                </Col>
            </Row>
       </FormContainer>
    )
}

export default Login
