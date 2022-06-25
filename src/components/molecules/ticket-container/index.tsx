// @Components
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Ticket } from '../../../services/tickets';
import CardTicket from '../card-ticket';
import { SubCategoriesInterface } from '../../../interface/ticket';

// @Styles
import './styles.scss';

// @Interfaces & Types
type Props = {
  category: string;
  subcategory: string;
};

const TicketContainer = ({ category, subcategory }: Props): JSX.Element => {
  const [tikets, setTickets] = useState<SubCategoriesInterface>();

  useEffect(() => {
    if (category !== '' && subcategory !== '') {
      setTickets(undefined);
      const ticketsAux: SubCategoriesInterface = new Ticket().getTicketsByCategory(category, subcategory)[0];
      setTickets(ticketsAux);
    }
  }, [category, subcategory]);

  return (
    <Grid container className="TicketContainer">
      {tikets?.events.length
        ? tikets?.events.map((events) => (
          <CardTicket
            categorie={category}
            subcategory={subcategory}
            ticket={events}
            key={events.id}
          />
        )) : (
          <Typography>Please select a category...</Typography>
        )}
    </Grid>
  );
};

export default TicketContainer;
