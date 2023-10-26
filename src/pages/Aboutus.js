import React from "react";
import Header from "../component/Header";
import "./Aboutus.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../component/Footer'

function Aboutus() {
  return (
    <div>
      <div id="maindiv">
        <Header />.
        <div
          id="bannerLabel"
          style={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>
            Feel the
            <br /> difference
          </h1>
        </div>
      </div>
      <div>
        <Container className="w-75">
          <Row>
            <Col lg={6} md={6} sm={6}>
              <div style={{ padding: "5rem 0" }}>
                <h2 className="pt-5 pb-3">one-of-a-kind salon</h2>
                <p>
                  We are a mindful collective focusing on wellness, looking to
                  help people return to their authentic selves. With our
                  service, you can soothe your soul – and your body!
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <img
                src="https://i.postimg.cc/90WJRwZL/skincare-caucasian-woman.webp"
                alt="..."
                width={'500px'}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pb-4 pt-5">
        <Container>
            <Row>
                <Col className="firstImg" lg={6} md={6} sm={12}>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src="https://i.postimg.cc/wjv4Qr3g/pexels-photomix-company-1002703.jpg" alt="..." />
                    </div>
                </Col>
                <Col className="firstImg" lg={6} md={6} sm={12}>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <h3>WE'RE GROWING FAST!</h3>
                        <p className="px-3">BeautyVista salon is one of the fastest-growing salon chains in Kerala. We opened our first salon in October 2021 and now have 4 outlets in Kochi. Customer loyalty is key to our business growth as repeat customers contribute a major chunk of our revenue.</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
      <div className="py-4">
        <Container>
            <Row>
            <Col className="firstImg" lg={6} md={6} sm={12}>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <h3>Something for everyone</h3>
                        <p className="px-3">We believe that our services help people and that they can have a positive impact on your everyday life.</p>
                    </div>
                </Col>
                <Col className="firstImg" lg={6} md={6} sm={12}>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src="https://i.postimg.cc/Gm1d3NJL/pexels-oleksandr-p-3800060.jpg" alt="..." />
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
      <div className="pb-4 pt-5">
        <Container>
            <Row>
                <Col className="firstImg" lg={6} md={6} sm={12}>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src="https://i.postimg.cc/W40VkPjY/skincare-caucasian-woman.webp" alt="..." />
                    </div>
                </Col>
                <Col className="firstImg" lg={6} md={6} sm={12}>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <h3>Our effective approach</h3>
                        <p className="px-3">Not all services are created the same. We meticulously select our brands and are committed to bringing you only the very best.</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}
export default Aboutus;
