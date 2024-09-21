import React, { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Card, CardContent, CardMedia, 
  Container, Box, IconButton, ThemeProvider, createTheme, useScrollTrigger 
} from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2'
import { LinkedIn, Twitter, Facebook, Email, Star } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assume these imports are from an assets folder
// import heroImage from './assets/';
import videoSrc from './assets/character-from-video-game-overwatch_1123470-956.jpg';

import game1Image from './assets/3d-rendering-people-portrait_23-2150964604.avif';
import game2Image from './assets/3d-rendering-people-portrait_23-2150964604.avif';
import game3Image from './assets/3d-rendering-people-portrait_23-2150964604.avif';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2a0e61', // Deep purple
    },
    secondary: {
      main: '#ffd700', // Gold
    },
    background: {
      default: '#1a0837', // Darker purple
      paper: '#2a0e61', // Deep purple
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#cccccc', // Light gray
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
});

// Sticky Navbar Component
const StickyNavbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar position={trigger ? "fixed" : "static"} color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'secondary.main' }}>
          JabszGaming
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Games</Button>
        <Button color="inherit">Community</Button>
        <Button color="inherit">Store</Button>
        <Button color="inherit">Blog</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

// Hero Section Component
const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${videoSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      pl: 4,
    }}
  >
    <Box>
      <Typography variant="h5" sx={{ color: 'secondary.main' }}>
        WORLD OF GAMING
      </Typography>
      <Typography variant="h1" sx={{ color: 'white', mb: 2 }}>
        Gaming, Just try <br />Jabsz !!!
      </Typography>
      <Button variant="contained" color="secondary">
        READ MORE
      </Button>
    </Box>
  </Box>
);

const GameCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box sx={{ py: 4, bgcolor: 'background.default', textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" color="secondary.main" gutterBottom>
          Featured Games
        </Typography>
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Slider {...settings}>
            {[game1Image, game2Image, game3Image].map((image, index) => (
              <div key={index} style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={image}
                  alt={`Game ${index + 1}`}
                  style={{ width: '100%', height: 'auto', maxHeight: '100%' }}
                />
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

// Game Card Component
const GameCard = ({ title, image, rating, category }) => (
  <Card sx={{ height: '100%',padding:"2px",border:"1px solid white", display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
    <CardMedia
      component="img"
      height="200"
      image={image}
      alt={title}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="div" color="secondary.main">
        {title}
      </Typography>
      <Box display="flex" alignItems="center" mb={1}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} sx={{ color: i < rating ? 'secondary.main' : 'text.secondary' }} />
        ))}
      </Box>
      <Typography variant="body2" color="text.secondary">
        Category: {category}
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        BUY NOW
      </Button>
    </CardContent>
  </Card>
);

// Released Games Section Component
const ReleasedGamesSection = () => (
  <Box sx={{ py: 8, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" color="secondary.main" gutterBottom>
        Released Games
      </Typography>
      <Box container spacing={4} justifyContent="space-around" sx={{display:"flex",flexDirection:"row",}}>
        {[
          { title: 'Call of Duty', image: game1Image, rating: 4, category: 'Action' },
          { title: 'Battle Grounds', image: game2Image, rating: 5, category: 'Battle Royale' },
          { title: 'Assassin Creed', image: game3Image, rating: 4, category: 'Adventure' },
        ].map((game, index) => (
          <Box item key={index} xs={12} sm={6} md={4}>
            <Box style={{ height: '250px', width: '250px', justifyContent: 'center',objectFit: 'cover' }}>
              <GameCard {...game} />
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

const Footer = () => (
  <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
    <Container maxWidth="lg">
      <Typography variant="h6" gutterBottom align="center">
        Jabsz Gaming
      </Typography>
      <Typography variant="body2" align="center">
        Shaping the future of gaming. Follow us on:
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <IconButton color="inherit" aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
        <IconButton color="inherit" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" aria-label="Facebook">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" aria-label="Email">
          <Email />
        </IconButton>
      </Box>
    </Container>
  </Box>
);

// Main App Component
const JabszGamingLandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <StickyNavbar />
        <HeroSection />
        <GameCarousel />
        <ReleasedGamesSection />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default JabszGamingLandingPage;