import React, { useState, useEffect } from 'react';
import PortfolioCard from '../../components/PortfolioCard';
import Grid from '@material-ui/core/Grid';
import projects from './projects';
import Box from '@material-ui/core/Box'


export default function Portfolio() {


    return (
        <Box style={{minHeight: '100vh', paddingTop: '5vh'}}>
        <Grid container spacing={1} justify="center">
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Grid container justify="center">
                    {
                        projects.map(project => {
                            return (
                                <Grid item xs={10} sm={6} md={3} key={project.id}>
                                    <PortfolioCard 
                                    project={project}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
        </Box>
    )
}
