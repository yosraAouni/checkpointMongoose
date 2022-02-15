import React from 'react'
import {Card,Button} from 'react-bootstrap'


const ContactCard = (contact) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" />
                <Card.Body>
                    <Card.Title> {contact.name} </Card.Title>
                    <Card.Text>{contact.email}</Card.Text>
                    <Card.Text>{contact.phone}</Card.Text>

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard