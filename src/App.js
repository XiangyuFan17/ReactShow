import logo from './logo.svg';
import './App.css';
import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create React App v4-beta example
                </Typography>
                <ProTip />
                <Copyright />
            </Box>
            <div className = "App-showScroll" >
                <div style = {{height: "100%", width: "340px", background:"red"}}>aaa</div>
                <div style = {{height: "100%", width: "340px", background:"lightblue"}}>bbb</div>
                <div style = {{height: "100%", width: "340px", background:"yellow"}}>ccc</div>
                <div style = {{height: "100%", width: "340px", background:"green"}}>ddd</div>
                <div style = {{height: "100%", width: "340px", background:"white"}}>eee</div>
                <div style = {{height: "100%", width: "340px", background:"brown"}}>fff</div>
            </div>
        </Container>
    );
}
