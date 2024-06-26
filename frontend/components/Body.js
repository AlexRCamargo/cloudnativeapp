import { Card, Container, Grid } from '@mui/icons-material';

export default function Body ({ children}) {
    return (
        <Container>
            <Grid item md={9} xs={12}>
                <Card> {children}</Card>
            </Grid>
        </Container>
    );
}
