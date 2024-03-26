import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const cards = [
    {
        src: 'https://images.ctfassets.net/lzny33ho1g45/78B8YPMVGUMAPbgbyyjXYG/4a11f7407a122ccfb72d895ba171a9bd/Ecwid_screenshot?w=1400',
        title: 'Ecommerce',
        description: 'Ecommerce website using mongodb frontend backend fullstack project. mongodbCompass postman brew',
        url: 'https://github.com/cusco1982/ecommerce'
    },
    {
        src: 'https://source.unsplash.com/random?wallpapers',
        title: 'WJ Best Insulation',
        description: 'Construction company website working in the tri-state area.',
        url: 'url'
    },
    {
        src: 'https://source.unsplash.com/random?wallpapers',
        title: 'Chrome Weather Extension',
        description: 'Weather API. ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eos!',
        url: 'url'
    },
    {
        src: 'https://source.unsplash.com/random?wallpapers',
        title: 'PrismaDB',
        description: 'Postgresql@15 pgAdmin psql railway.app and Prisma',
        url: 'url'
    },
    {
        src: 'https://source.unsplash.com/random?wallpapers',
        title: 'toDoChecklist',
        description: 'SQLite. Nextjs13',
        url: 'url'
    },
    {
        src: 'https://source.unsplash.com/random?wallpapers',
        title: 'Article to PDF',
        description: 'Chrome web-scraper extension.',
        url: 'url'
    }
];




export default function Album() {
    return (
        <>



            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: "orange",
                    // bgcolor: "background.paper",
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">



                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Album layout
                    </Typography>


                    <Typography
                        variant="h5"
                        align="center"
                        color="text.secondary"
                        paragraph
                    >
                        Something short and leading about the collection below—its
                        contents, the creator, etc. Make it short and sweet, but not too
                        short so folks don&apos;t simply skip over it entirely.
                    </Typography>


                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Main call to action</Button>
                        <Button variant="outlined">Secondary action</Button>
                    </Stack>




                </Container>
            </Box>





            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>

                    {cards.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >


                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: "56.25%",
                                    }}
                                    image={card.src}
                                />


                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.title}
                                    </Typography>
                                    <Typography>
                                        {card.description}
                                    </Typography>
                                </CardContent>


                                <CardActions>
                                    <Link href={card.url} target="_blank">
                                        <Button size="small">
                                            View
                                        </Button>
                                    </Link>
                                    <Button size="small">Edit</Button>
                                </CardActions>


                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>





        </>
    );
}
