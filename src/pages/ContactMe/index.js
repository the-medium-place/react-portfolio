import React from 'react';
import './style.css';
import API from '../../utils/API';
// import ContactForm from '../../components/ContactForm';
import { Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas);



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
                <div className="contact-card">
                    <Row>
                        <Col>
                            <h4>Reach Out!</h4>
                        </Col>
                    </Row>
                    <Row className="small-cards">
                        <Col className="contact-card small-card">
                            <a target="_blank" rel="noopener noreferrer" href="mailto:zgstowell@gmail.com">
                                <h1><FontAwesomeIcon icon={["fas", "envelope"]} /></h1>
                                <small>zgstowell@gmail.com</small>
                            </a>
                        </Col>
                        <Col className="contact-card small-card">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/the-medium-place">
                                <h1><FontAwesomeIcon icon={["fab", "github"]} /></h1>
                                <small>github.com/the-medium-place</small>
                            </a>
                        </Col>
                        <Col className="contact-card small-card">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zachary-stowell/">
                                <h1><FontAwesomeIcon icon={["fab", "linkedin"]} /></h1>
                                <small>linkedin.com/in/zachary-stowell</small>
                            </a>
                        </Col>
                    </Row>
                </div>

                <div className="contact-form-box">
                    Contact form coming soon!
                    {/* <ContactForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} /> */}
                </div>
            </>
        )
    }
}

