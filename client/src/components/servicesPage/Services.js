import classes from './Services.module.scss'

import React from 'react'

const Services = ({ service }) => {
  console.log(service)
  return (
    <div id={classes.ServiceContainer}>
        <h2>Price: {service?.price?.display_text + service.price?.amount}</h2>
        <p>Service Name: {service?.title || "No Title"}</p>
    </div>
  )
}

export default Services
