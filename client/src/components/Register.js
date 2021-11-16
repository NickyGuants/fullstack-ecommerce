import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { register } from '../redux/actions/userActions'
import { useNavigate , useLocation} from 'react-router'


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState(null)
    
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const location = useLocation()


    const userRegister = useSelector((state) => state.userRegister)
    const { error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
        navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(username,name, email, password))
    }
  }

  return (
    <FormContainer>
          <h1>Sign Up</h1>
          {message && <h1>{ message }</h1>}
        {error && <h1>{ error.message }</h1>}
          <Form onSubmit={submitHandler}>
          <Form.Group controlId='username' className='child'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="input"
            type='username'
            placeholder='Enter your username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='name' className='child'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input"
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email' className='child'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className="input"
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password' className='child'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input"
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword' className='child'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className="input"
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' className='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Register;