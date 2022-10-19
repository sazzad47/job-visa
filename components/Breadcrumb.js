import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Link from 'next/link';



export default function Breadcrumb({title}) {
  return (
    <div className='custom-breadcrum'>
      <Breadcrumbs>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        ><a style={{textDecoration: 'none'}}>
          <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Typography>
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
