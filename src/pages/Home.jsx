import React, { useState } from "react";
import classes from "./Home.module.scss";
import homeBg from "../assets/m.jpeg";
import truck1 from "../assets/truck1.png";
import truck2 from "../assets/truck2.png";
import truck3 from "../assets/truck3.png";
import truck from "../assets/3.jpeg";
import pic2 from "../assets/2.jpeg";
import pic3 from "../assets/pic4.jpg";
import pic4 from "../assets/pic2.jpg";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaBox, FaGlassMartiniAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
const Home = () => {
  const [contact,setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  return (
    <section className={classes.container}>
      <div className={classes.homeBanner}>
        <img src={homeBg} alt="MD Transportation" />
      </div>
      <div id="about" className={classes.about}>
        <h2>Welcome to our moving <br /> services platform!</h2>
        <div className={classes.content}>
        <div className={classes.card}>
          <img src={truck1} alt="truck" />
          <p>
          Our system connects you with dozens of movers across the country,
          offering a wide range of services to meet your relocation needs.
          </p>
        </div>
        <div className={classes.card}>
          <img src={truck2} alt="truck" />
          <p>
          Whether you're moving offices, apartments, small items, or entire
          warehouses and factories, we've got you covered.
        </p>
        </div>
        <div className={classes.card}>
          <img src={truck3} alt="truck" />
          <p>
          With our user-friendly website, you can easily compare prices for
          various moving services, 
        </p>
        </div>
        <div className={classes.card}>
          <img src={truck1} alt="truck" />
       
          <p>as well as additional services such as
          purchasing moving boxes, packing and unpacking, furniture disassembly
          and assembly, crane lifting, and storage solutions.</p>
        </div>
        <div className={classes.card}>
          <img src={truck2} alt="truck" />
       
          <p>
          Say goodbye to the hassle of searching for reliable movers and
          negotiating prices. 
        </p>
        </div>
        <div className={classes.card}>
          <img src={truck3} alt="truck" />
       
          <p>Our platform streamlines the moving process,
          making it simple and efficient for you to find the best moving
          solution tailored to your requirements.</p>
        </div>
        <div className={classes.card}>
          <img src={truck1} alt="truck" />
            <p>
              Experience seamless moving with us your one-stop destination for all
              your relocation needs.
            </p>
        </div>
        </div>
      </div>
      <div className={classes.advantage}>
        <h3>Our Advantages</h3>
        <div className={classes.content}>
          <div className={classes.card}>
            <p><CiDeliveryTruck /> A large amount</p>
            <img src={truck} alt="A large amount" />
          </div>
          <div className={classes.card}>
            <p><FaBox /> Delicacy</p>
            <img src={pic2} alt="Delicacy" />
          </div>
          <div className={classes.card}>
            <p><FaGlassMartiniAlt /> Carefully</p>
            <img src={pic3} alt="Carefully" />
          </div>
          <div className={classes.card}>
            <p><IoMdTime  />  In time</p>
            <img src={pic4} alt="In time" />
          </div>

        </div>
      </div>
      <div id="contact" className={classes.contact}>
        <h3>Contact Us</h3>
        <div className={classes.contactForm}>
        <Input error={false} onChange={(e) => setContact({...contact,name:e.target.value?.slice(0,50)})} placeholder={'Name'} value={contact.name}/>
        <Input error={false} onChange={(e) => setContact({...contact,email:e.target.value?.slice(0,150)})} placeholder={'Email'} value={contact.email}/>
        <Input error={false} onChange={(e) => setContact({...contact,email:e.target.value?.slice(0,250)})} placeholder={'Subject'} value={contact.subject}/>
        <textarea onChange={(e) => setContact({...contact,message:e.target.value})} value={contact?.message} placeholder='Message'  />
        <Button sm  text={'Send'} onClick={() => {}} />
        </div>
         
      </div>
     
    </section>
  );
};

export default Home;
