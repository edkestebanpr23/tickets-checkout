import React, { useState, useEffect } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Ticket } from '../../services/tickets';
import { TicketInterface } from '../../interface/ticket';
import './styles.scss';

const EventLayout = (): JSX.Element => {
  const category = useSelector((state: any) => state.tickets.category);
  const subcategory = useSelector((state: any) => state.tickets.subcategory);
  const event = useSelector((state: any) => state.tickets.event);

  const ticket: TicketInterface | null = new Ticket().getEvent(
    category || 'Familiar',
    subcategory || '1',
    event || '1'
  );
  console.log(ticket);
  return (
    <Grid container className="EventInfo">
      <Grid className="card">
        <Grid
          item
          xs={5}
          className="image"
          style={{ backgroundImage: `url("${ticket?.image}")` }}
        />
        <Grid item xs={7} className="text-cnt">
          <Typography color="text.primary" variant="h3" className="title">
            {ticket?.event}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            className="description"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem unde ab aspernatur adipisci inventore, reprehenderit
            fuga doloribus, eum sequi et, commodi ut? Deleniti totam error
            doloremque maiores facere modi sunt.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="description"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nam quisquam aspernatur beatae nesciunt, recusandae quas consectetur
            earum quia sint facere unde rerum magnam aliquam voluptas iste.
            Quaerat, reiciendis explicabo?
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventLayout;
