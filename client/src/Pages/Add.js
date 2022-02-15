import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postContact } from '../JS/Actions/contact'

const Add=() =>{
    const [newContact, setNewContact] = useState({ name:"", email:"", phone:""})
    const dispatch = useDispatch ()

    const hendleChange = (e) =>{
        setNewContact({...newContact,[e.target.name]: e.target.value})
    }

    const add =() =>{
        dispatch(postContact(newContact))
    }
    return (
        <div>
            <h2>Add contact</h2>
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter name" name='name' value={newContact.name} onChange={hendleChange} />
            <Form.Label>Email address</Form.Label>
            <Form.Control  placeholder="Enter email" name='email' value={newContact.email} onChange={hendleChange} />
            <Form.Text className="text-muted">
            
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control  placeholder="Phone number" name='phone' value={newContact.phone} onChange={hendleChange} />
        </Form.Group>
        
        <Link to='/'><Button variant="primary" type="submit" onClick={()=>add()}>
            Submit
        </Button></Link>
        </Form>
            
            
        </div> 
        </div>
    )
}

export default Add