import React from 'react';
import './style.scss';
import CountUp from 'react-countup';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

export function Cards({ data: {confirmed, recovered, deaths, lastUpdate }}) {
    if(!confirmed) {
        return 'loading..'
    }
    console.log(2, recovered)
    return(
        <section className="cards-container">
            <Grid container justify='center' spacing={2}  >
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} duration={1.7} end={confirmed.value} separator="."/>
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">Number of cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                          <CountUp start={0} duration={1.9} end={recovered.value} separator="." />
                        </Typography>
                        <Typography color="textSecondary">Data</Typography>
                        <Typography variant="body2">Number of recovered</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>                        
                        <Typography variant="h5">
                          <CountUp start={0} duration={2.5} end={deaths.value} separator="." />
                        </Typography>
                        <Typography color="textSecondary">Data</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </section>
    )
}