import * as React from 'react';
import { Grid } from '@mui/material';
import './styles.scss';
import ListCategories from '../../organism/list-categories';
import TicketContainer from '../../molecules/ticket-container';
import { useSelector } from 'react-redux';

const Body = (): JSX.Element => {
  const category = useSelector((state: any) => state.tickets.category);
  const subcategory = useSelector((state: any) => state.tickets.subcategory);

  return (
    <Grid container className="Body">
      <Grid container className="container">
        <Grid item xs={4} className="container-left">
          <ListCategories />
        </Grid>
        <Grid item xs={8} className="container-rigth">
          <Grid container>
            <Grid item xs={12}>
              <TicketContainer category={category} subcategory={subcategory} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Body;
