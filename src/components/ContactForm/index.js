import React, { Component } from 'react'

export default class ContactForm extends Component {


    render() {

        return (
            <div className="wrapper">
                <div className="contactme-wrapper container">
                    <form id="contactme-form" onSubmit={this.handleSubmit}>

                        {/* <!-- input user name --> */}
                        <div className="form-group pt-2">
                            <label htmlFor="contactName">Name:</label>
                            <input type="text" name="contactName" className="form-control form-color" id="contactName"
                                placeholder="what should we call ya'?" required onChange={this.handleInputChange} />
                        </div>

                        {/* <!-- input user email --> */}
                        <div className="form-group">
                            <label htmlFor="contactEmail">E-Mail:</label>
                            <input type="email" name="contactEmail" className="form-control form-color" id="contactEmail"
                                placeholder="stuff@thing.wut" required onChange={this.handleInputChange} />
                        </div>

                        {/* <!-- input user message --> */}
                        <div className="form-group">
                            <label htmlFor="contactMessage">Message:</label>
                            <textarea className="form-control form-color" name="contactMessage" rows="10" id="contactMessage"
                                placeholder="If you're calling for the complaints department, please continue to hold..."
                                required onChange={this.handleInputChange}></textarea>
                        </div>

                        {/* <!-- submit button --> */}
                        <input type="submit" className="btn btn-primary submit-btn" value="Send It!" />
                    </form>

                </div>
            </div>
        )
    }
}
