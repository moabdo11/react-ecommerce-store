import React from 'react';

import Login from '../../components/Login/login';
import Register from '../../components/Register/register';

import './authorization.styles.scss';

const Authorization = () => (
    <div className="authorization">
        <Login />
        <Register/>
    </div>
)

export default Authorization;