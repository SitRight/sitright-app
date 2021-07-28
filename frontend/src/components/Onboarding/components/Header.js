import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';

const style = {
    backgroundColor: '#D1AEB9'
}

const Header = () => {

    return(
        <AppBar style={style} position="static">
            <Toolbar>
                <Typography variant="h6">
                SitRight
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header