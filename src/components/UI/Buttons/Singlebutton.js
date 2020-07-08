import React from 'react';

import './Singlebutton.styles.scss';

const SingleButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button 
        className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} single-button`} 
        {...otherProps}
    >
        {children}
    </button>
);

export default SingleButton;