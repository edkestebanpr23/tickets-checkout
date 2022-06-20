import * as React from 'react';
import {
  Button, Grid, makeStyles, Typography
} from '@mui/material';
import './styles.scss';
import ListCategories from '../../organism/list-categories';
import { Ticket } from '../../../services/tickets';
import CardTicket from '../card-ticket';
import { SubCategoriesInterface } from '../../../interface/ticket';

type Props = {
  category: string;
  subcategory: string;
};

const TicketContainer = ({ category, subcategory }: Props): JSX.Element => {
  const tickes: SubCategoriesInterface = new Ticket().getTicketsByCategory(
    category,
    subcategory
  )[0];

  console.log('tickets', tickes);
  return (
    <Grid container className="TicketContainer">
      {
        tickes.events.map(ticket => (
        <CardTicket categorie={category} subcategory={subcategory} ticket={ticket} key={ticket.id} />
        ))
      }
    </Grid>
  );
};

export default TicketContainer;
