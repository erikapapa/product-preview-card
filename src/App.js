import React , { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import perfume_img from "./images/image-product-desktop.jpg";

import './App.css'

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="container my-5 my-lg-0 my-md-0">
      {
        isDesktop ? <img src={perfume_img} alt="Gabrielle Essence Eau De Parfum"></img> : null
      }

      <Card sx={{ maxWidth: 345}}>
        {
          !isDesktop ?
            <CardMedia
              component="img"
              alt="Gabrielle Essence Eau De Parfum"
              height="250"
              image={perfume_img}
            /> : null
        }
        <CardContent sx={{ padding: 5 }}>
          <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom style={{ letterSpacing: '6px', marginTop: 10, marginBottom: 10 }}>
            PERFUME
          </Typography>
          <Typography gutterBottom variant="h4" component="div" sx={{ fontFamily: 'Fraunces, serif !important' }} >
            Gabrielle Essence Eau De Parfum
          </Typography>
          <Typography variant="body2" color="hsl(228, 12%, 48%)" marginTop={2} marginBottom={2}>
            A floral, solar, and voluptuous interpretation composed by Oliver Polge, Perfume-Creator for the House of CHANEL
          </Typography>

          <div className='d-flex align-items-center my-3'>
            <strong className='me-4'>$149.99</strong>
            <strike>$169.99</strike>
          </div>

          <button className='w-100 py-2'> 	&#128722; Add to Cart</button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
