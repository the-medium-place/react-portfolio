import React, { Component } from 'react';
import API from '../../utils/API';
import PortfolioCard from '../../components/PortfolioCard';
import './style.css';
import LoadingIcon from '../../components/LoadingIcon';

export default class Portfolio extends Component {

    state = {
        reposArr: []
    }

    // GET MY REPOS FROM GITHUB API
    componentDidMount() {
        API.getRepos()
            .then(res => {
                // FILTER RESULT TO REMOVE 
                // REPOS WITHOUT 'homepage' VALUE
                res.data = res.data.filter(repo => repo.homepage !== null)
                console.log(res.data)
                // ADD LANGUAGES TO STATE OBJ
                res.data.forEach((repo) => {
                    API.getRepoLanguages(repo.name)
                    .then(langs => {
                        // console.log(langs.data)
                        repo.languageObj = langs.data;
                        this.setState({ reposArr: res.data });
                    })

                })
            })
            .catch(err => console.error(err))
    }


    render() {
        return (
            <div className="portfolio-wrapper">
                {/* CHECK FOR API RESULTS AND LOAD THEM IF PRESENT */}
                {this.state.reposArr.length > 0 ? this.state.reposArr.sort((a, b) => new Date(b.size) - new Date(a.size)).map((repo, index) => {
                //    console.log(repo)
                    return (

                        <PortfolioCard key={index} readmeURL={repo.readmeURL} html_url={repo.html_url} name={repo.name} description={repo.description} updated_at={repo.updated_at} homepage={repo.homepage} languageObj={(repo.languageObj)} />
                    )
                }) : (
                        <div className="loading-wrapper">
                            <LoadingIcon />
                            <h2>Loading Portfolio...</h2>
                        </div>
                    )}
            </div>
        )
    }
}

