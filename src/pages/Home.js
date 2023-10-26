import React from "react";
import "./Home.css";
import Header from "../component/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div id="homemain">
        <Header />
        <Container>
          <Row style={{ height: "90vh" }}>
            <Col lg={6} md={6} sm={6} xe={6} id={"dis"}>
              <div>
              <p>
                At BeautyVista, we believe that everyone deserves to look and
                feel their best. Our beauty parlor is a serene oasis where you
                can escape the stresses of daily life and indulge in self-care
                that leaves you looking and feeling your most beautiful self
              </p>
              </div>
              <div className="btnstyle">
                <Link to={'/servise'}>
                    <label className="btn btn-success" varient>
                    Touch our services
                    </label>
                </Link>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xe={6}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
