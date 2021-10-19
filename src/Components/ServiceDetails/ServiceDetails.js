import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './ServiceDetails.css'

const ServiceDetails = () => {


    const { id } = useParams()

    const [data, setData] = useState([]);
    const [service, setService] = useState({});


    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        const found = data.find(d => d.id === id);
        setService(found)
    }, [data])

    return (
        <Container>
            <div className=" service-container font">
                <div className="half-section-img">
                    <img src={service?.img} alt="" />
                    <h2>{service?.name}</h2>
                </div>
                <div className=" half-section p-7">
                    <p>{service?.description}</p>
                    <h4>{service?.Price}</h4>
                </div>
            </div>
        </Container>
    );
};

export default ServiceDetails;