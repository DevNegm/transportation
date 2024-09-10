import React from 'react'
import classes from './Request.module.scss'
import Button from '../components/ui/Button'
const Request = () => {
  return (
    <section className={classes.container}>
      <h3>Order Transport</h3>
      <div className={classes.requestForm}>
        <div className={classes.formGroup}>
          <label htmlFor="transportType">Transport Type</label>
          <select name="transportType" id="transportType">
            <option value="truck">Truck</option>
            <option value="ship">Ship</option>
            <option value="plane">Plane</option>
          </select>
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id="full_name" placeholder="Full Name" />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="phone_number">Phone Number:</label>
          <input type="text" id="phone_number" placeholder="Phone Number" />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="from">From:</label>
          <input type="text" id="from" placeholder="Enter Destination" />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="to">To:</label>
          <input type="text" id="to" placeholder="Enter Destination" />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="distance">Distance In KM:</label>
          <input type="text" id="to" placeholder="Distance" />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" />
        </div>
        <div className={classes.formGroup}>
          <Button sm onClick={() => {}} text={'Submit'}/>
        </div>
      </div>
    </section>
  )
}

export default Request