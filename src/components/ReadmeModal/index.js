import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import API from '../../utils/API';
import resume from '../../assets/files/ZacStowell.pdf';
import './style.css';

export default function index(props) {
    return (
        <div >
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modal-box" >
                    <Modal.Title id="contained-modal-title-vcenter">
                        My Resume
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-box">
                    <object>

                    <embed src={resume} width="100%" height="600" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html" />
                    </object>
                       
                    {
                    
                    // API.getRepoReadme(props.name)
                    // .then(readme => {
                    //     readme.data = readme.data.filter(repo => repo.name === 'README.md');
                    //     console.log(readme.data[0].download_url)
                    //     props.readmeURL = readme.data[0].download_url;

                        // (API.getReadmeContent(props.readmeURL)
                        // .then(res => {
                        // // console.log(res.data)
                        // return <p>{res.data}</p>
                        // })
                        // .catch(err => console.error(err))
                    // )
                    // })
                    
                    }
                </Modal.Body>
                <Modal.Footer className="modal-box">
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
