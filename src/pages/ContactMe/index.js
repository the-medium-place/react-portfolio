import React, { useState } from 'react';
import API from '../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EightBitAvatar from '../../assets/images/8bitAvatar.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(3),
    },
    form: {
        margin: theme.spacing(3)
    },
    formTitle: {
        textAlign: 'center'
    },
    formTitleText: {
        paddingTop: '1.2rem'
    },
    contactLinkBox: {
        display: 'flex',
        justifyContent: 'center'
    },
    contactLink: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '40px',
        background: "darkblue",
        color: 'azure',
        margin: "3px",
        alignItems: 'center'
    }
}));




export default function ContactMe() {
    const [emailState, setEmailState] = useState({
        email: "",
        name: "",
        message: ""
    })

    const handleSendClick = (e) => {
        e.preventDefault();
        API.sendMail(emailState);

    }

    const classes = useStyles();


    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmailState({ ...emailState, [name]: value })
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Paper>
                        <Grid item xs={12} className={classes.formTitle}>
                            <h1 className={classes.formTitleText}>Reach out and touch someone (me)!</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSendClick}>
                                <Grid item xs={5}>
                                    <TextField fullWidth id="standard-basic" label="Name" name="name" value={emailState.name} onChange={handleInputChange} />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField fullWidth type="email" id="standard-basic" label="Email" name="email" value={emailState.email} onChange={handleInputChange} />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField id="standard-multiline-flexible" multiline rows={4} rowsMax={30} label="Message" name="message" value={emailState.message} onChange={handleInputChange} fullWidth />
                                </Grid>
                                <Button
                                    variant="contained"
                                    // color="primary"
                                    type="submit"
                                    className={classes.button}
                                    endIcon={<SendIcon />}
                                >
                                    Send
                                </Button>
                            </form>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid className={classes.contactLinkBox} item xs={12} md={4}>
                    {/* <div style={{width: '90%', height: '3rem'}} className={classes.contactLink}>
                    zgstowell@gmail.com
                    </div> */}
                    <Button
                        variant="contained"
                        style={{width: '90%', height: '3rem'}}
                        color="default"
                        className={classes.button}
                        href="mailto:zgstowell@gmail.com"
                        target="_blank"
                        // startIcon={<CloudUploadIcon />}
                    >
                        zgstowell@gmail.com
                    </Button>
                </Grid>
                <Grid className={classes.contactLinkBox} item xs={12} md={4}>
                    {/* <div style={{ width: '90%', height: '3rem' }} className={classes.contactLink}>
                        github profile
                    </div> */}
                <Button
                        variant="contained"
                        style={{width: '90%', height: '3rem'}}
                        color="default"
                        className={classes.button}
                        href="http://github.com/the-medium-place"
                        startIcon={<GitHubIcon />}
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </Grid>
                <Grid className={classes.contactLinkBox} item xs={12} md={4}>
                    {/* <div style={{ width: '90%', height: '3rem' }} className={classes.contactLink}>
                        linkedin profile
                    </div> */}
                    <Button
                        variant="contained"
                        style={{width: '90%', height: '3rem'}}
                        color="default"
                        className={classes.button}
                        // href="mailto:zgstowell@gmail.com"
                        startIcon={<LinkedInIcon />}
                        target="_blank"
                    >
                        zgstowell@gmail.com
                    </Button>
                </Grid>

            </Grid>
        </div>
    )
}
