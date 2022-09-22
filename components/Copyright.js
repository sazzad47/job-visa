import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'

const Copyright = ({props}) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
      <span className='me-2'>Novage</span>
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  )
}

export default Copyright
