import React from 'react';
import Header from './components/Header';
import Button from '@material-ui/core/button'
import { Link } from 'react-router-dom'


const Welcome = () => {
    return(
        <div>
        <Header />
        <Button component={Link} to="/good">Lets Get Started</Button>
        </div>
    )
}

export default Welcome