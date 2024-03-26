// import Image from 'next/image';
// import styles from './page.module.css';
import MainFeaturedPost from '@/components/MainFeaturedPost';
import FeaturedPost from '@/components/FeaturedPost';
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';
import Gallery from '../components/Gallery'
import { Container } from '@mui/material'

import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
// const posts = [post1, post2, post3];
const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:

    "This portfolio was made using nextjs13, materialUI, postgresqlDB, and packages such as Prisma, nodemailer and more!",
  // "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",

  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};
const featuredPosts = [
  {
    title: 'ecommerce',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: 'https://github.com/cusco1982/ecommerce'
  },
  {
    title: 'constructionTemplate',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: 'https://github.com/cusco1982/constructionTemplate'
  },
];
const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/cusco1982' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/StardustSake' },
    { name: 'LinkedIn', icon: TwitterIcon, url: 'https://www.linkedin.com/in/julian-ayllon/' },
    { name: 'Discord', icon: TwitterIcon, url: '#' },
    { name: 'LinkTree', icon: TwitterIcon, url: '#' },
    // { name: 'Facebook', icon: FacebookIcon, url:'' },
  ],
};



export default function Home() {
  return (
    <Container maxWidth="lg">



      <MainFeaturedPost post={mainFeaturedPost} />



      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>





      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="From the firehose"
        //  posts={posts}
        />

        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>




      <Gallery />







    </Container>
  )
};