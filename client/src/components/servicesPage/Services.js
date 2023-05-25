import classes from './Services.module.scss'

import React from 'react'

const Services = ({ service }) => {
  console.log(service)
  return (
    <div id={classes.ServiceContainer}>
        <h2>Price: {service.price}</h2>
        <p>Service Name: {service.title}</p>
    </div>
  )
}

export default Services