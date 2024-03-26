import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const cards = [
  {
    src: 'https://images.ctfassets.net/lzny33ho1g45/78B8YPMVGUMAPbgbyyjXYG/4a11f7407a122ccfb72d895ba171a9bd/Ecwid_screenshot?w=1400',
    title: 'ecommerce',
    description: 'Ecommerce website using mongodb frontend backend fullstack project. mongodbCompass postman brew',
    url: 'https://github.com/cusco1982/ecommerce'
  },
  {
    src: 'https://github.com/cusco1982/constructionTemplate',
    title: 'constructionTemplate',
    description: 'Construction-company website, template.',
    url: 'https://github.com/cusco1982/constructionTemplate'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'chrome_weather_extension',
    description: 'Weather API. ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eos!',
    url: 'https://github.com/cusco1982/chrome_weather_extension'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'prismaDB',
    description: 'Postgresql@15 pgAdmin psql railway.app and Prisma',
    url: 'https://github.com/cusco1982/prismaDB'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'toDoChecklist',
    description: 'SQLite. Nextjs13',
    url: 'https://github.com/cusco1982/toDoChecklist'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'weather-to-article',
    description: 'Chrome web-scraper extension.',
    url: 'https://github.com/cusco1982/weather-to-article'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'selenium-python',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eos!',
    url: 'https://github.com/cusco1982/selenium-python'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'AWS_discord_bot',
    description: 'AWS ec2 instance. ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eos!',
    url: 'https://github.com/cusco1982/AWS_discord_bot'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'twilio-sms',
    description: 'Twilio api text message via node. Ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eos!',
    url: 'https://github.com/cusco1982/twilio-sms'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'raspberryPi',
    description: 'Kali lunix on raspberry pi project',
    url: 'https://github.com/cusco1982/raspberryPi'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'ecommercev2',
    description: 'ecommerce project but upgraded to nextjs13',
    url: 'https://github.com/cusco1982/ecommercev2'
  },
  {
    src: 'https://github.com/cusco1982/wjbest-next',
    title: 'wjbest-next',
    description: 'constructionTemplate customized for wj best llc working in the tri-state area',
    url: 'https://github.com/cusco1982/wjbest-next'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'linasGiftShop',
    description: 'Linas gift shop! Ecommercev2 customized for a local gift shop!',
    url: 'https://github.com/cusco1982/linasGiftShop'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'linasGiftShopv2',
    description: 'Linas gift shop! Linas e-commerce website customized with dimeTemplate!',
    url: 'https://github.com/cusco1982/linasGiftShopv2'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'dimeTemplate',
    description: 'dimeTemplate',
    url: 'https://github.com/cusco1982/dimeTemplate'
  },
  {
    src: 'https://source.unsplash.com/random?wallpapers',
    title: 'pfl',
    description: 'This portfolio!',
    url: 'https://github.com/cusco1982/pfl'
  }




];




export default function projectPage() {
  return (
    <>
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}



      <main>



        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
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



                    <Link href={`projects/${card.title}`}>
                      <Button size="small">Edit</Button>
                    </Link>



                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>




      </main>
    </>
  );
};






// useSelectedLayoutSegment is a Client Component hook that lets you read the active route segment one level below the Layout it is called from.
// It is useful for navigation UI, such as tabs inside a parent layout that change style depending on the active child segment.


// 'use client'
 
// import { useSelectedLayoutSegment } from 'next/navigation'
 
// export default function ExampleClientComponent() {
//   const segment = useSelectedLayoutSegment()
 
//   return <p>Active segment: {segment}</p>
// }