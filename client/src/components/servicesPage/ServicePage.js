import React from 'react'
import classes from './ServicePage.module.scss'
import Services from './Services'
import { useNavigate } from 'react-router-dom'

const ServicePage = ({ data }) => {
  const Navigate = useNavigate()

  const goBackHandler = () => {
    Navigate('/');
  }

  if (data === {}) {
    return <h1>PAGE NOT FOUND</h1>
  } else {
    return (
      <div id={classes.ServiceContainer}>
        <div id={classes.ServiceHeader}>
          <button onClick={goBackHandler}><b>Go to Back</b></button>
          <h1>Result Page</h1>
        </div>

        <div id={classes.ANSConatiner}>
          <div id={classes.AboutContainer}>
            <div><img src={data.avatar} alt="THIS IS AVATAR" /></div>
            <div>
              <h3>{data.name}</h3>
              <p>{data.about}</p>
            </div>
          </div>

          <div id={classes.ServicesContainer}>
            <h2>All Service Offering</h2>
            <div>
              {
                data.services.map((service, i) => {
                  return <Services key={i} service={service} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServicePage