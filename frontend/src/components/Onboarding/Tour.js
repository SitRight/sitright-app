import React from 'react';
import Header from './components/Header';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/button'

const Welcome = () => {
    return(
        <div>
        <Header />
        <Button component={Link} to="/dashboard">Lets Get Started</Button>
        </div>
    )
}

export default Welcome