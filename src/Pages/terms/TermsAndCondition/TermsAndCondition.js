import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>welcome to terms and condition</h3>
            <p>back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;