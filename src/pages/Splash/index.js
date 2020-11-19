import React from 'react';
import Headshot from '../../assets/images/Seattle-Brand-Headshot-Photographer-35.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        // position: 'absolute',
        // top: '7vh'
        marginTop: '-10vw'

        // minHeight: '120vh',
        // width: '100vw',
        // overflowX: 'hidden'

    },
    headshot: {
        position: 'relative',
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: '0.8rem',
        maxHeight: '65vw',
        marginBottom: '15vh',
        // zIndex: 1,
        maxWidth: '80vw',
        // padding: '.6rem',
        background: 'white',
        boxShadow: '0 0 5px rgb(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)',
        transform: `rotate(-15deg)`,
        transition: '.3s',
        // '&:before, &:after': {
        //     position: 'absolute',
        //     zIndex: '-1',
        //     width: '40%',
        //     height: 10,
        //     content: '""',
        //     left: 12,
        //     bottom: 8,
        //     background: 'rgba(0, 0, 0, 0)',
        //     transform: 'skew(-10deg) rotate(-5deg)',
        //     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        // },
        // '&:after': {
        //     left: 'auto',
        //     right: 12,
        //     transform: "skew(10deg) rotate(5deg)"
        // }
        '&:hover': {
            transform: 'rotate(0)',
            transition: '.3s'
        }
    },
    splashHeading: {
        fontSize: '7vw',
        color: 'yellow',
        textShadow: '1px 1px 1px black',

    },
    headingWrap: {
        transform: 'translateY(-12rem)',
        zIndex: '10'
    },
    splashSubHeading: {
        transform: 'translateY(4rem)',
        color: 'yellow',
        textShadow: '1px 1px 1px black',
        fontSize: '1.8vw'
    }


}))


export default function Splash() {

    const classes = useStyles();


    return (
        <Grid container className={classes.root}>
            <Grid item xs={5}></Grid>
            <Grid item xs={7} style={{ zIndex: '10', textAlign: 'left', borderRadius: '5px'}}>
                <a href="/home"><h1 className={classes.splashHeading} style={{ transform: 'translateY(4rem)', }}>Zac Stowell</h1></a>
                <p className={classes.splashSubHeading}>Full-Stack Web Developer</p>
                <p className={classes.splashSubHeading}>Portland, OR | zgstowell@gmail.com</p>
            </Grid>

            <Grid xs={3}></Grid>
            <Grid item xs={6}>
                {/* <div className={classes.headshot} style={{background: 'white'}}>

                <div style={{width: '98%', height: '60vw', background:`url(${Headshot}) center center no-repeat`, backgroundSize: "contain", margin: '0 auto'}}></div>
                </div> */}
                <img src={Headshot} className={classes.headshot} style={{ width: '78%' }} />
            </Grid>
            <Grid xs={3}></Grid>

            <Grid item xs={5} className={classes.headingWrap}>
                <a href="/portfolio"><h1 className={classes.splashHeading} style={{ textAlign: 'right' }}>Portfolio</h1></a>
                <p className={classes.splashSubHeading} style={{ transform: 'translateY(-1rem)', textAlign: 'center' }}>A selection of projects</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} className={classes.headingWrap}>
                <a href="/contact"><h1 className={classes.splashHeading} style={{ textAlign: 'left' }}>Contact</h1></a>
                <p className={classes.splashSubHeading} style={{ transform: 'translateY(-1rem)' }}>Send me a message!</p>
            </Grid>

            <Grid xs={12}></Grid>
        </Grid>
    )
}
