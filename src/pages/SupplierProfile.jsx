import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import Input from '../components/ui/Input'
import classes from './SupplierProfile.module.scss'
import Button from '../components/ui/Button'
import { formatDate } from '../utils/HelperFunctions'
import { SiInternetcomputer } from 'react-icons/si'
import { MdApartment, MdConstruction, MdEdit } from 'react-icons/md'
import { ImOffice } from 'react-icons/im'
import { GiHouse } from 'react-icons/gi'
import { FaRegStar, FaStar } from 'react-icons/fa'

const SupplierProfile = () => {
  const [current,setCurrent] = useState('profile')
  const [edit,setEdit] = useState(false)
  const [editPrices,setEditPrices] = useState(false)
  const [profile,setProfile] = useState({
    first_name: 'Ahmad',
    last_name: 'Negm',
    phone_number: '+201140198477',
    company_name: 'google',
  })

  const [prices,setPrices] = useState({
      apartment_price: 0,
      office_price: 0,
      construction_price: 0,
      other_price: 0,
    })

    const [feedbacks,setFeedbacks] = useState([
      {
        id: 1,
        customer: "Ahmad Negm",
        feedback: "Good service",
        stars: 4
      },
      {
        id: 2,
        customer: "Ahmad Negm",
        feedback: "Good service",
        stars: 3
      },
      {
        id: 3,
        customer: "Ahmad Negm",
        feedback: "Good service",
        stars: 5
      },
      {
        id: 4,
        customer: "Ahmad Negm",
        feedback: "Good service",
        stars: 5
      },
      {
        id: 5,
        customer: "Ahmad Negm",
        feedback: "Good service",
        stars: 5
      }
    ])

  const handleReset = () => {
    setProfile({
      first_name: 'Ahmad',
      last_name: 'Negm',
      phone_number: '+201140198477',
      company_name: 'google',
    })
    setEdit(false)
  }

  const handleResetPrices = () => {
    setPrices({
      apartment_price: 0,
      office_price: 0,
      construction_price: 0,
      other_price: 0,
    })
    setEditPrices(false)
  }
  

 



  return (
    <section className={classes.container}>
    <div className={classes.profileHeader}>
      <button onClick={() => setCurrent('profile')} style={{borderBottomColor:current === 'profile' && '#1134ea',color: current === 'profile' && '#1134ea'}} className={classes.button}>Profile</button>
      <button onClick={() => setCurrent('prices')} style={{borderBottomColor:current === 'prices' && '#1134ea',color: current === 'prices' && '#1134ea'}} className={classes.button}>Prices</button>
      <button onClick={() => setCurrent('feedbacks')} style={{borderBottomColor:current === 'feedbacks' && '#1134ea',color: current === 'feedbacks' && '#1134ea'}} className={classes.button}>Feedbacks</button>
    </div>
    {(current === 'profile' && edit) ?
     <div className={classes.profileContent} style={{backgroundColor:'transparent',padding:'0'}}>
        <p>First Name</p>
        <Input value={profile.first_name} onChange={(e) => setProfile({...profile,first_name:e.target.value})}  placeholder="First Name" />
        <p>Last Name</p>
        <Input value={profile.last_name} onChange={(e) => setProfile({...profile,last_name:e.target.value})}  placeholder="Last Name" />
        <p>Company Name</p>
        <Input value={profile.company_name} onChange={(e) => setProfile({...profile,company_name:e.target.value})} placeholder="Company Name" />
        <p>Phone Number</p>
        <Input value={profile.phone_number} onChange={(e) => setProfile({...profile,phone_number:e.target.value})} placeholder="Phone Number" />
        <div className={classes.btns}>
          <button className={classes.btn}>Save</button>
          <button className={classes.btn2} onClick={handleReset} type="submit">Cancel</button>
        </div>
     </div> : current === 'profile' && !edit &&
     <div className={classes.profileContent}>
      <button className={classes.edit} onClick={() => setEdit(true)}><FiEdit2 /> Edit</button>
      <p><span>Name:</span> Ahmad Negm</p>
      <p><span>Email:</span> ahmdn@gmail.com</p>
      <p><span>Phone Number:</span> +201140198455</p>
      <p><span>Company Name:</span> Google</p>
    </div>}
    {current === 'prices' && <div className={classes.prices}>
     <div className={classes.pricesHeader}>
     <h3>Price for 1Km for:</h3>
      <button onClick={() => setEditPrices(true)} className={classes.editPrices}>
        <MdEdit /> Edit Prices
      </button>
     </div>
      {editPrices ? <div className={classes.editPricesContent}>
      <div className={classes.profileContent} style={{backgroundColor:'transparent',padding:'0'}}>
        <p>Apartment Price</p>
        <Input value={prices.apartment_price} onChange={(e) => setPrices({...prices,apartment_price:e.target.value})}  placeholder="Apartment Price" />
        <p>Office Price</p>
        <Input value={prices.office_price} onChange={(e) => setPrices({...prices,office_price:e.target.value})}  placeholder="Office Price" />
        <p>Construction Price</p>
        <Input value={prices.construction_price} onChange={(e) => setPrices({...prices,construction_price:e.target.value})} placeholder="Construction Price" />
        <p>Other Price</p>
        <Input value={prices.other_price} onChange={(e) => setPrices({...prices,other_price:e.target.value})} placeholder="Other Price" />
        <div className={classes.btns}>
          <button className={classes.btn}>Save</button>
          <button className={classes.btn2} onClick={handleResetPrices} type="submit">Cancel</button>
        </div>
     </div>
      </div> :
      <div className={classes.pricesContent}>
      <div className={classes.priceCard}>
        <GiHouse />
        <h4>Apartments</h4>
        <p>{prices?.apartment_price}$</p>
      </div>
      <div className={classes.priceCard}>
      <ImOffice />
        <h4>Offices</h4>
        <p>{prices?.office_price}$</p>
      </div>
      <div className={classes.priceCard}>
      <MdConstruction />
        <h4>Construction materials</h4>
        <p>{prices?.construction_price}$</p>
      </div>
      <div className={classes.priceCard}>
      <SiInternetcomputer />
        <h4>Others</h4>
        <p>{prices?.other_price}$</p>
      </div>
      </div>
      }
      
      
    </div>}
    {current === 'feedbacks' && <div className={classes.feedbacks}>
      <h3>The rate of this supplier </h3>
      <div className={classes.feedbackContent}>
      {feedbacks?.length ? feedbacks?.map((feedback) => (
        <div key={feedback.id} className={classes.feedback}>
          <h4>{feedback.customer}</h4>
          <div className={classes.feedDetails}>
          <p>{feedback.feedback}</p>
          <p className={classes.stars}>
              {Array.from({ length: 5 }, (v, i) => (
                  i < feedback.stars ? <FaStar /> : <FaRegStar />
              ))}
          </p>
          </div>
        </div>
      )) : 
        <p className={classes.noReq}>You don't have any feedback</p>
      }
      </div>
    </div>}
  </section>
  )
}

export default SupplierProfile