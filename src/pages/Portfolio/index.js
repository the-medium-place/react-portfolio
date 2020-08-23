import React, { Component } from 'react';
import API from '../../utils/API'
import PortfolioCard from '../../components/PortfolioCard';
import './style.css';

export default class Portfolio extends Component {

    state = {
        reposArr: []
    }

    // GET MY REPOS FROM GITHUB API
    componentDidMount(){
        API.getRepos()
            .then(res => {
                console.log(res.data)
                this.setState({ reposArr: res.data })
            })
            .catch(err => console.log(err))
    }

render(){
    return (
        <>
        {/* CHECK FOR API RESULTS AND LOAD THEM IF PRESENT */}
            {this.state.reposArr.length > 0 ? this.state.reposArr.map((repo, index) => {
                return (

                    <PortfolioCard key={index} html_url={repo.html_url} name={repo.name} description={repo.description} updated_at={repo.updated_at} homepage={repo.homepage} />
                    // <p key={index}>
                    // <a href={repo.html_url}>{repo.name}</a>
                    // <br />
                    // {repo.description}
                    // </p>
                    )
                }) : <h1> Loading Portfolio... </h1>}
        </>
    )
}
}

