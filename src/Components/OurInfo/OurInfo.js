import React from 'react';
import { Container } from 'react-bootstrap';
import './OurInfo.css'

const OurInfo = () => {
    return (
        <Container>
            <div className="our-info font">
                <div className="half-info">
                    <h4>━━━━ ABOUT OUR COMPANY</h4>
                    <h1>Welcome To Our Hospital</h1>
                    <p>There arge many variations ohf pacgssages of sorem gpsum ilable</p>
                    <button className="btn-danger p-1">Find Doctors</button>
                    <br />
                    <br />
                    <button className="btn-danger p-1">Appoinments</button>
                </div>
                <div className="half-image">


                    <img src="https://i.ibb.co/4gfBpHk/xabout1-png-pagespeed-ic-d-L0-Au07-Uoh.webp" alt="" srcset="" />

                </div>
            </div>
        </Container>
    );
};

export default OurInfo;