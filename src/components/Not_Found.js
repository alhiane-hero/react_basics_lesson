import React from 'react';
import {Parent, Title, Desc} from './styled_cpmnts';

const NotFound = _ => {
    return (
        <Parent>
            <Title>Error 404</Title>
            <Desc>Page Not Found</Desc>
        </Parent>
    );
}

export default NotFound;