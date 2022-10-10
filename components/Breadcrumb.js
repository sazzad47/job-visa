import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Link from 'next/link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb({title}) {
  return (
    <div role="presentation" className='breadcrumb' onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" className='breadcrumb' >
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        ><a style={{textDecoration: 'none'}}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </a>
        </Link>
        
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {title}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
