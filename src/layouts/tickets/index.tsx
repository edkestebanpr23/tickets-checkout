import * as React from 'react';
import { Grid } from '@mui/material';
import './styles.scss';
import ListCategories from '../../components/organism/list-categories';
import TicketContainer from '../../components/molecules/ticket-container';
import { useSelector } from 'react-redux';

const TicketsLayout = (): JSX.Element => {
  const category = useSelector((state: any) => state.tickets.category);
  const subcategory = useSelector((state: any) => state.tickets.subcategory);

  return (
    <>
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
    </>
  );
};

export default TicketsLayout;
