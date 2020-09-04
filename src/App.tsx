import * as React from 'react';
import styled from 'styled-components';

const Aa = styled('div')`
    color: red;
    ${(props): string => `color: ${props.theme.colors.main};`}
`;

export const App = () => (
    <div>
        App ..
        <Aa>
            <Aa>dasdasdas</Aa>
        </Aa>
    </div>
);
