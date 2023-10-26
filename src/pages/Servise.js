import React from "react";
import Header from "../component/Header";
import "./Servise.css";
import { Container } from "react-bootstrap";
import Footer from "../component/Footer";


function Servise() {
    
  return (
    <div>
      <Header />
      <div id='serviseList'>
        <h3 className="text-center pt-4 pb-3">Service</h3><hr/>
        <div>
            <div className="service py-4">
                <Container className='space w-75'>
                    <img src="https://i.postimg.cc/nrbPtj60/istockphoto-520841672-1024x1024.jpg" alt='...'/>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'0rem 1.5rem'}}>
                        <h4><span>Hair</span> Styling</h4><br/>
                        <p>From classic cuts to the latest trends in hair color, our skilled hairstylists will transform your locks into a masterpiece.</p>
                        <label  className='btn btn-outline-success'>book Appointment</label>
                    </div>
                </Container>
            </div><hr/>
            <div className="service py-4">
                <Container className='space w-75'>
                    <img src="https://i.postimg.cc/44QgNWnZ/skincare-caucasian-woman.webp" alt='...'/>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'0rem 3rem'}}>
                        <h4>Skincare</h4><br/>
                        <p>Pamper your skin with our rejuvenating facials, microdermabrasion, and more. We tailor our skincare treatments to your unique needs</p>
                        <label  className='btn btn-outline-success'>book Appointment</label>
                    </div>
                </Container>
            </div><hr/>
            <div className="service py-4">
                <Container className='space w-75'>
                    <img src="https://i.postimg.cc/QM0HKcXn/istockphoto-520841672-1024x1024.jpg" alt='...'/>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'0rem 3rem'}}>
                        <h4>Nail Care</h4>
                        <p>Treat your hands and feet to a makeover with our manicures and pedicures. Choose from a range of classic and creative nail designs.</p>
                        <label  className='btn btn-outline-success'>book Appointment</label>
                    </div>
                </Container>
            </div><hr/>
            <div className="service py-4">
                <Container className='space w-75'>
                    <img src="https://i.postimg.cc/3JjL4VCt/skincare-caucasian-woman.webp" alt='...'/>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'0rem 1.5rem'}}>
                        <h4>Pedicure</h4>
                        <p>A pedicure is a cosmetic beauty treatment for the feet and toenails. It is a relaxing and rejuvenating experience that involves cleaning, grooming, and pampering the feet and nails</p>
                        <label className='btn btn-outline-success'>book Appointment</label>
                    </div>
                </Container>
            </div><hr/>
            <div className="service py-4">
                <Container className='space w-75'>
                    <img src="https://i.postimg.cc/5N8XcHZR/istockphoto-520841672-1024x1024.jpg" alt='...'/>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'0rem 1.5rem'}}>
                        <h4>Makeup Artistry</h4>
                        <p>Whether you want a natural look or glamorous makeup for a special occasion, our makeup artists will enhance your beauty.</p>
                        <label className='btn btn-outline-success'>book Appointment</label>
                    </div>
                </Container>
            </div><hr/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Servise;
