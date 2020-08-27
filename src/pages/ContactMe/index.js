import React from 'react';
import './style.css';
import API from '../../utils/API';
import ContactForm from '../../components/ContactForm';

export default class ContactMe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contactName: '',
            contactEmail: '',
            contactMessage: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const messageObj = {
            username: this.state.contactName,
            userEmail: this.state.contactEmail,
            userMessage: this.state.contactMessage
        }
        API.sendMail(messageObj)

        // setTimeout(function () {
        //     window.location.reload();
        // }, 0);
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    render() {
        return (
           <>
            <ContactForm />
           </>
        )
    }
}

