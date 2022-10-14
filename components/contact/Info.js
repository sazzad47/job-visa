import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Parser from 'html-react-parser';
import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'





const renderIcons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Icon icon={icon} key={key} className="info-icon" />
  ))

const Info = ({data}) => {
  console.log('ckkk', data)
  return ( 
  <section className="info">
    <h2 className="info-h2">Contact information</h2>

    <div className="d-flex flex-column">
      <div className='d-flex mb-2'><LocalPhoneIcon sx={{mr:2}} /> {Parser(data.phone)}</div>
      <div className='d-flex my-2'><EmailIcon sx={{mr:2}} /> {Parser(data.email)}</div>
      <div className='d-flex'><LocationOnIcon sx={{mr:2}} /> {Parser(data.address)}</div>
    </div>

    <div className="info-icons-container">{renderIcons()}</div>
  </section>
  )
}

export default Info
