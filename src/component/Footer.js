import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {FcAddressBook,FcPhone,FcRules} from 'react-icons/fc'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram,BsTwitter} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'

function Footer() {
  return (
    <div>
        <Container>
            <Row className='text-center py-5'>
                <Col lg={2} md={2} sm={2}>
                    <div>
                        <h4 className='fs-4'><span className='text-warning'>Beauty</span>Vista</h4>
                    </div>
                </Col>
                <Col>
                    <div lg={8} md={8} sm={8}>
                        <h4 className='pb-3'>Contact Page</h4>
                        <div className='pb-5'>
                            <h5>BeautyVista-kakkanad</h5>
                            <h6><FcAddressBook className='fs-3'/>Metro Pillar No. 356, Opp. Milma Dairy, Kochi</h6>
                            <h6><FcPhone className='fs-3'/>9875487512,2135478</h6>
                            <h6><FcRules/>beautyvista@gmail.com</h6>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.2074883715495!2d76.36081621601616!3d10.00828887582452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9d4968ed6b%3A0xac7018beb464c0b!2sInfopark%20Kochi!5e0!3m2!1sen!2sin!4v1698331579999!5m2!1sen!2sin" width="200" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div lg={2} md={2} sm={2}>
                        <h4 className='pb-3'>LIVE YOUNG</h4>
                        <h6 className='text-start pb-3'>Appreciate yourself and love yourself. That's when you're the most beautiful</h6>
                        <div style={{display:'flex',justifyContent:'center',gap:'2rem',}} className='fs-3'>
                            <AiOutlineMail/>
                            <FaFacebookF/>
                            <BsInstagram/>
                            <GrLinkedinOption/>
                            <BsTwitter/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default Footer