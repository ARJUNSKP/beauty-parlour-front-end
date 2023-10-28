import React from "react";
import "./Header.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {sendInqueryData} from '../servise/allApi'

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [uname, setUname] = useState(true);
  const [email, setEmail] = useState(true);
  const [inputData, setIntputData] = useState({
    uname: "",
    email: "",
    service: "",
    textContent: "",
  });

  const getData = (e) => {
    const { name, value } = e.target;
    if (name == "uname") {
      if (value.match(/^[a-zA-Z]/)) {
        setUname(true);
        setIntputData({ ...inputData, [name]: value });
      } else {
        setUname(false);
      }
    }
    if (name == "email") {
      if (
        value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEmail(true);
        setIntputData({ ...inputData, [name]: value });
      } else {
        setEmail(false);
      }
    }
    if (name == "service" || name == "textContent") {
      setIntputData({ ...inputData, [name]: value });
    }
  };
  const sendinquery = async () => {
    const { uname, email, service, textContent } = inputData;
    if (!uname) {
      toast.error("User Name Required!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else if (!email) {
      toast.error("Email required!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (!service) {
      toast.error("!Select Service", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else{
      const Responce = await sendInqueryData(inputData)
      setShow(false)
      if(Responce.status>=200 || Responce <300){
        toast.success("Send", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: " rgba(54, 29, 29, 0.308)" }}
      >
        <div class="container-fluid mx-3">
          <a class="navbar-brand text-light" href="/">
            <b>
              <span className="text-warning">Beauty</span>Vista
            </b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          class="menuData collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <a
                class="nav-link active text-light ms-3"
                aria-current="page"
                href="/"
              >
                <h5>
                  <b>Home</b>
                </h5>
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link text-light ms-3" href="/aboutas">
                <h5>
                  <b>AboutUs</b>
                </h5>
              </a>
            </li>
            <li class="nav-item mx-3">
              <label class="nav-link text-light mx-3">
                <h5 onClick={handleShow}>
                  <b>Inquiry</b>
                </h5>
              </label>
            </li>
          </ul>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>
              <span className="text-warning">Beauty</span>Vista
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <from>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="uname">User Name</label>
              <input
                type="text"
                placeholder="username"
                id="uname"
                name="uname"
                onChange={(e) => getData(e)}
              />
              {!uname && <p className="text-danger">!User Name required</p>}
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => getData(e)}
                type="text"
                placeholder="email"
                id="email"
                name="email"
              />
              {!email && <p className="text-danger">!Email Name required</p>}
              <label for="service">Service</label>
              <select
                onChange={(e) => getData(e)}
                name="service"
                id="serviceid"
              >
                <option value="hairstyling">Hair Styling</option>
                <option value="skincare">Skincare</option>
                <option value="nailcare">Nail Care</option>
                <option value="pedicure">Pedicure</option>
                <option value="makeupartistry">Makeup Artistry</option>
              </select>
              <label htmlFor="textContent">Message</label>
              <textarea
                onChange={(e) => getData(e)}
                type="text"
                placeholder="message"
                id="message"
                name="textContent"
              ></textarea>
            </div>
          </from>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendinquery}>
            send
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Header;
