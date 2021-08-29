import React, { Fragment } from 'react';
import Search from '../users/SearchByUsername';
import Users from '../users/Users';

const GetUser = (props) => {
    return (
        <Fragment>
            <Search {...props} />
        </Fragment>
    );
};

export default GetUser;
