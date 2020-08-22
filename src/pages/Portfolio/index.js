import React, { Component } from 'react';
import API from '../../utils/API'
import './style.css';

export default class Portfolio extends Component {

    state = {
        reposArr: []
    }

    componentDidMount(){
        API.getRepos()
            .then(res => this.setState({ reposArr: res.data }))
            .catch(err => console.log(err))
    }
render(){
    return (
        <>
            {this.state.reposArr.map((repo, index) => {
                return (
                    <p key={index}>
                    <a href={repo.html_url}>{repo.name}</a>
                    <br />
                    {repo.description}
                    </p>)
                })}
        </>
    )
}
}

