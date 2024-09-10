import React, { useState } from 'react'
import classes from './Deals.module.scss'
import Button from '../components/ui/Button'
const Deals = () => {
  const [deals, setDeals] = useState([
    {
      id: 1,
      supplierName: 'Supplier 1',
      companyName: 'Company 1',
      description: '20% Discount on transportation for 35km from example city to example city valid until 2021-10-01',   
      createdAt: '2021-10-01',
    },
    {
      id: 2,
      supplierName: 'Supplier 2',
      companyName: 'Company 2',
      description: 'Deal 2',
      createdAt: '2021-10-01',
    },
    {
      id: 3,
      supplierName: 'Supplier 3',
      companyName: 'Company 3',
      description: 'Deal 3',
      createdAt: '2021-10-01',
    },
    {
      id: 4,
      supplierName: 'Supplier 4',
      companyName: 'Company 4',
      description: 'Deal 4',
      createdAt: '2021-10-01',
    },
  ])
  return (
    <section className={classes.container}>
    <h3 className={classes.title}>Hot Sales</h3>
    <div className={classes.content}>
    {deals.map((deal) => (
        <div key={deal.id} className={classes.deal}>
          <h4>{deal.supplierName} {deal.companyName}</h4>
          <p className={classes.description}>{deal.description}</p>
          <p className={classes.date}>Created At {deal.createdAt}</p>
          <Button sm text={'More Details'}/>
        </div>
      ))}
    </div>
     
    </section>
  )
}

export default Deals