import * as React from 'react';
import {
  Button, Grid, makeStyles, Typography
} from '@mui/material';
import './styles.scss';
import ListCategories from '../../organism/list-categories';
import TicketContainer from '../../molecules/ticket-container';
import { Ticket } from '../../../services/tickets';

type Props = {
  children: JSX.Element;
};

const Body = ({ children }: Props): JSX.Element => {
  const tickes = new Ticket().getTicketsByCategory('Familiar', 'Circus/ Magic/ Illusion');
  return (
    <Grid container className="Body">
      <Grid container className="container">
        <Grid item xs={4} className="container-left">
          <ListCategories />
        </Grid>
        <Grid item xs={8} className="container-rigth">
          <Grid container>
            <Grid item xs={12}>
              <TicketContainer category="Familiar" subcategory="Circus/ Magic/ Illusion" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Body;
