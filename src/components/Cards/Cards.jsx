import React from 'react';
import './style.scss';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

export function Cards({ data: {confirmed, recovered, deaths, lastUpdate}}) {
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
                        <Typography variant="h5">Data</Typography>
                        <Typography color="textSecondary">Data</Typography>
                        <Typography variant="body2">Number of cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Data</Typography>
                        <Typography color="textSecondary">Data</Typography>
                        <Typography variant="body2">Number of recovered</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Data</Typography>
                        <Typography color="textSecondary">Data</Typography>
                        <Typography variant="body2">Number of </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </section>
    )
}