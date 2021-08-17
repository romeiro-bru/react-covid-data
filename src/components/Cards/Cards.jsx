import React from 'react';
import './style.css';
import CountUp from 'react-countup';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

export function Cards({ data: {confirmed, recovered, deaths, lastUpdate }}) {
    if(!confirmed) {
        return 'loading..'
    }
    console.log(lastUpdate)
    return(
        <section className="cards-container">
            <Grid container justify-content='center' spacing={2}  >
                <Grid item component={Card} xs={12} md={3} id="cards" className="card-infected" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h7">
                            <CountUp  start={0} duration={1.7} end={confirmed.value} separator="."/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de casos</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} id="cards" className="card-recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h7">
                          <CountUp start={0} duration={1.9} end={recovered.value} separator="." />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de recuperados</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} id="cards" className="card-deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>                        
                        <Typography variant="h7">
                          <CountUp start={0} duration={2.5} end={deaths.value} separator="." />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de mortes</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </section>
    )
}