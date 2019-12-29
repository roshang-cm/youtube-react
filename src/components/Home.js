import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, TextField } from '@material-ui/core';
import { YOUTUBE_API_KEY } from '../constants';

class HomePage extends Component {

    render() {
        return (
            <div className={"grow"}>
                <AppBar color="primary" position="static">
<Toolbar>
<Typography variant="h6">
    YouTube Player
</Typography>
<div className={'grow'}/>
<TextField placeholder="Search for something" />
<div className={'grow'}/>

<Button variant="outlined">Log Out</Button>
</Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default HomePage;