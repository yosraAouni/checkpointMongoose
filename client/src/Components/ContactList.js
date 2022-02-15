import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../JS/Actions/contact'
import ContactCard from './ContactCard'
import {Spinner} from 'react-bootstrap'

const  ContactList=() => { 
    const dispatch = useDispatch()
    const ListContacts = useSelector(state=> state.contactReducer.listContacts)
    const load = useSelector(state=> state.contactReducer.load)
    useEffect(()=> {
        dispatch(getContacts)
    }, [dispatch])


    return (
        <div>
            <h2> Contact List </h2>
            { load ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span> </Spinner> : ListContacts.map((el)=> <ContactCard contact={el} key={el._id} />)
            } 
        </div>
    )
}

export default ContactList