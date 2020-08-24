import React, { Component } from 'react';
import API from '../../utils/API'
import PortfolioCard from '../../components/PortfolioCard';
import './style.css';
import LoadingIcon from '../../components/LoadingIcon';

export default class Portfolio extends Component {

    state = {
        reposArr: []
    }

    // GET MY REPOS FROM GITHUB API
    componentDidMount(){
        API.getRepos()
            .then(res => {
                console.log(res.data)

                res.data = res.data.filter(a => a.homepage !== null)
                this.setState({ reposArr: res.data })
            })
            .catch(err => console.log(err))
    }

render(){
    return (
        <>
        {/* CHECK FOR API RESULTS AND LOAD THEM IF PRESENT */}
            {this.state.reposArr.length > 0 ? this.state.reposArr.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).map((repo, index) => {
                return (

                    <PortfolioCard key={index} html_url={repo.html_url} name={repo.name} description={repo.description} updated_at={repo.updated_at} homepage={repo.homepage} />
                    )
                }) : <LoadingIcon />}
                <LoadingIcon />
        </>
    )
}
}

