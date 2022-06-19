import * as React from 'react';
import { Grid } from '@mui/material';

type Props = {
    children: JSX.Element
}

const Body = ({ children }: Props): JSX.Element => {
    console.log(1);
    return (
        <Grid container>
            {children}
        </Grid>
    );
};

export default Body;
