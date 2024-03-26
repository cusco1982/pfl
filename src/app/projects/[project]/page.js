'use client'
import { useEffect } from 'react';
import { Avatar, Button, Grid, Box, Link, Paper, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Octokit } from 'octokit';



async function getData() {
  console.log('getData')
  return
};





export default function projectPage({ params }) {



  useEffect(() => {


    getData();
  })



  const projects = [
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
  const project = projects.find((project) => project.title === params.project)







  
  console.log('project: ',project)

  return (
    <>




      <Grid container component="main" sx={{ height: '70vh' }}>



        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={1} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}
          >

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">Title: {project.title}</Typography>


            <br />
            <Typography>Description: {project.description}</Typography>


            <br />

            <Typography>Src: {project.src}</Typography>


            <br />

            <Typography>Url: {project.url}</Typography>

          </Box>
        </Grid>



        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />




      </Grid>












      <Grid container component="main" sx={{ height: '50vh' }}>


        <Grid
          item
          xs={false}
          sm={3}
          md={4}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />




        <Grid item xs={12} sm={9} md={8} component={Paper} elevation={1} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {project.title}
            </Typography>
          </Box>
        </Grid>



      </Grid>



      <Grid container component="main" sx={{ height: '50vh' }}>

        <Grid item xs={12} sm={9} md={8} component={Paper} elevation={1} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {project.title}
            </Typography>
          </Box>
        </Grid>


        <Grid
          item
          xs={false}
          sm={3}
          md={4}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

      </Grid>





    </>
  )
};
