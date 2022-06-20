import React, { useEffect, useState } from 'react';
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
  const [tikets, setTickets] = useState<SubCategoriesInterface>();

  useEffect(() => {
    if (category !== '' && subcategory !== '') {
      setTickets(undefined);
      const ticketsAux: SubCategoriesInterface = new Ticket().getTicketsByCategory(
        category,
        subcategory
      )[0];
      setTickets(ticketsAux);
    }
  }, [category, subcategory]);

  console.log('tickets', tikets);
  return (
    <Grid container className="TicketContainer">
      {
        Boolean(tikets?.events.length) && tikets?.events.map(events => (
        <CardTicket categorie={category} subcategory={subcategory} ticket={events} key={events.id} />
        ))
      }
    </Grid>
  );
};

export default TicketContainer;
