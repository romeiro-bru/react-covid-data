import React from 'react';
import './style.css';
import CountUp from 'react-countup';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

export function Cards({ data: {confirmed, deaths, lastUpdate }}) {
    if(!confirmed) {
        return 'Selecione um país para verificar os dados.'
    }
    return(
        <section className="container cards-container">
            <Grid container justify-content='center' spacing={2}  >
                <Grid item component={Card} xs={12} md={5} id="cards" className="card-infected" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="subtitle1">
                            <strong><CountUp  start={0} duration={1.5} end={confirmed.value} separator="."/></strong>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de casos</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={5} id="cards" className="card-deaths" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>                        
                        <Typography variant="subtitle1">
                          <strong><CountUp start={0} duration={2.3} end={deaths.value} separator="." /></strong>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de mortes</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </section>
    )
}