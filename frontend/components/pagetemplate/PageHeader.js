import { Grid, listItem, Typography } from '@mui/material';

export default function PageHeader({ pageLabel, children }) {
    return (
        <Listitem>
            <Grid container alignItems="center">
                <Grid item xs={6}>
                    <Typography component="h4" variant="h4">
                        {pageLabel}
                    </Typography>
                </Grid>
                <grid align="right" item xs={6}>
                    {children}
                </grid>
            </Grid>
        </Listitem>
    );
}
