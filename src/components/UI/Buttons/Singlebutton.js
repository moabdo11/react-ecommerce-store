import React from 'react';

import './Singlebutton.styles.scss';

const SingleButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} single-button`} {...otherProps}>
        {children}
    </button>
);

export default SingleButton;