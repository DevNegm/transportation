import React, { useState } from 'react'
import classes from './Profile.module.scss'
import { Link } from 'react-router-dom'
import { FiEdit2 } from 'react-icons/fi'
import Input from '../components/ui/Input'
import Search from '../components/ui/Search'
import { formatDate } from '../utils/HelperFunctions'
import Button from '../components/ui/Button'
import Table from '../components/ui/Table'
const orders = [
  {
      id: 1,
      customer: "Customer 1",
      supplier: "Supplier A",
      truckT: "C1",
      quantity: 5,
      status: "Pending",
      distanse: "33 KM",
      price: 3500
  },
  {
      id: 2,
      customer: "Customer 2",
      supplier: "Supplier B",
      truckT: "E",
      quantity: 3,
      status: "Completed",
      distanse: "33 KM",
      price: 3500
  },
  {
      id: 3,
      customer: "Customer 5",
      supplier: "Supplier C",
      truckT: "C",
      quantity: 1,
      status: "Completed",
      distanse: "33 KM",
      price: 3500
  },
  {
      id: 4,
      customer: "Customer 2",
      supplier: "Supplier A",
      truckT: "C1",
      quantity: 2,
      status: "Pending",
      distanse: "33 KM",
      price: 3500
  },
  {
      id: 5,
      customer: "Customer 4",
      supplier: "Supplier E",
      truckT: "E",
      quantity: 1,
      status: "Pending",
      distanse: "33 KM",
      price: 3500
  }
];

const Profile = () => {
  const [current,setCurrent] = useState('profile')
  const [search,setSearch] = useState('')
  const [transportList,setTransportList] = useState([])
  const [edit,setEdit] = useState(false)
  const [profile,setProfile] = useState({
    first_name: 'Ahmad',
    last_name: 'Negm',
    phone_number: '+201140198477',
    address: 'cairo / hedayek helwan',
  })

  const handleReset = () => {
    setProfile({
      first_name: 'Ahmad',
      last_name: 'Negm',
      phone_number: '+201140198477',
      address: 'cairo / hedayek helwan',
    })
    setEdit(false)
  }

  const handleSearch = (e) => {
    if (search?.length > 0) {
        if (event.key === 'Enter') {
            // dispatch(getTransportHistory(search)).then((res) => {
            //   setTransportList(res?.payload)
            //     productsError && console.log(productsError)
            // })
        }
    }
}
const handleResetSearch = (e) => {
    setSearch('')
    // dispatch(getTransportHistory()).then((res) => {
    //   setTransportList(res?.payload)
    //     productsError && console.log(productsError)
    // })
}

const handleCancel = (id) => {
  // dispatch(cancelOrder(id)).then((res) => {
  //   res && console.log(res)
  //   productsError && console.log(productsError)
  // })
}

{/* <h2>Order Number: ${foundOrder.orderNumber}</h2> */}
//                 <hr>
//                 <p>Transport Type: ${foundOrder.transportType}</p>
//                 <p>Date: ${foundOrder.date}</p>
//                 <p>Destination: ${foundOrder.destination}</p>
//                 <p>Status: ${foundOrder.status}</p>
const columns = [
  {
    name: 'Order Number',
    selector: row => <p>{row?.id}</p>,
    minWidth: "200px",
  },
  {
    name: 'Transport Type',
    selector: row => <p>{row?.truckT}</p>,
  },
  {
    name: 'Destination',
    selector: row => <p>{row?.distination}</p>,
  },
  {
    name: 'Status',
    selector: row => <p className={classes.status}>Status: <span style={{color: row?.status === 'pending' ? 'var(--blueColor)' : row?.status === 'accepted' ? 'var(--greenColor)' : 'var(--redColor)'}}>{row?.status}</span></p>,
  },
  {
    name: 'Date',
    selector: row => <p className={classes.price}>{formatDate(row?.created_at)}</p>,
  },
  {
    name: 'Action',
    selector: row =>  <Button text={'Cancel'} sm onClick={() => handleCancel(row?.id)} loading={false} warning disabled={row?.status !== 'pending' || false}/>,
  },
];


  return (
    <section className={classes.container}>
      <div className={classes.profileHeader}>
        <button onClick={() => setCurrent('profile')} style={{borderBottomColor:current === 'profile' && '#1134ea',color: current === 'profile' && '#1134ea'}} className={classes.button}>Profile</button>
        <button onClick={() => setCurrent('orders')} style={{borderBottomColor:current === 'orders' && '#1134ea',color: current === 'orders' && '#1134ea'}} className={classes.button}>Transport History</button>
      </div>
      {(current === 'profile' && edit) ?
       <div className={classes.profileContent} style={{backgroundColor:'transparent',padding:'0'}}>
          <p>First Name</p>
          <Input value={profile.first_name} onChange={(e) => setProfile({...profile,first_name:e.target.value})}  placeholder="First Name" />
          <p>Last Name</p>
          <Input value={profile.last_name} onChange={(e) => setProfile({...profile,last_name:e.target.value})}  placeholder="Last Name" />
          <p>Phone Number</p>
          <Input value={profile.phone_number} onChange={(e) => setProfile({...profile,phone_number:e.target.value})} placeholder="Phone Number" />
          <p>Address</p>
          <Input value={profile.address} onChange={(e) => setProfile({...profile,address:e.target.value})} placeholder="Address" />
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
        <p><span>Address:</span> Cairo / hedayek helwan</p>
      </div>}
      {current === 'orders' && <div className={classes.orderHistory}>
        <Search search={search} placeholder={'Search by Order Number:'} setSearch={setSearch} handleSearch={handleSearch} handleResetSearch={handleResetSearch} />
        
        <div className={classes.item}>
          {orders && orders?.length ? <Table
          columns={columns}
          data={orders}
          noData={"You don't have any Requests"}
          // loading={myRequestsRentBuyLoading}
        /> : <p className={classes.noReq}>You don't have any Orders</p>}
        </div>
      </div>}
    </section>
  )
}

export default Profile