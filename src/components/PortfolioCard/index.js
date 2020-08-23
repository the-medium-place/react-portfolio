import React from 'react';
import './style.css';


export default function index(props) {
    return (
        <div className="port-card text-center">
            <h3>{(props.name).toUpperCase()}</h3>
            <p>
                {(props.description) ? props.description : 'no description yet'}
                <br />{(props.updated_at)}
            </p>
            {(props.homepage) ? (
                <div className="deploy-link">
                    <a href={props.homepage}>Deployed Link</a>
                </div>
            ) :
                <p>No Link Yet</p>
            }
            <div className="repo-link">
                <a href={props.html_url}>Github Repo</a>
            </div>
        </div> // end of .port-card
    )
}
