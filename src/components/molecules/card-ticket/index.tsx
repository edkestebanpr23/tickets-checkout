import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import './styles.scss';
import { Ticket } from '../../../services/tickets';

type Props = {
  ticket: {
    event: string;
    place: string;
    location: string;
    hour: string;
    date: string;
    id: string;
    image: string;
  },
  categorie: string;
  subcategory: string;
};

const CardTicket = ({ ticket, categorie, subcategory }: Props): JSX.Element => {
  console.log();
  return (
      <Grid item xs={12} className="Card">
        <Grid container>
          <Grid item xs={4} className="image" style={{ backgroundImage: `url("${ticket.image}")` }} />
          <Grid item xs={5} className="body">
            <Typography variant="h5" className="title">
              {ticket.event}
            </Typography>
            <Grid className="location">
              <Typography variant="h6" className="place">
              {ticket.place}
              </Typography>
              <Typography variant="body1" className="country">
              {ticket.location}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={3} className="body">
            <Typography variant="body1" className="hour">
            {ticket.hour}
            </Typography>
            <Typography variant="body1" className="date">
            {ticket.date}
            </Typography>
            <Grid className="btn-ctn">
              <Button variant="contained">Buy tickets</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default CardTicket;
