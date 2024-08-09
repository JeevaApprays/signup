import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import './Admin.css'; // Import the CSS file

const All = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cartdetails');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Add to Cart Product Details</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {data.map((item, index) => (
                    <Col key={index} className="mb-4">
                        <Card className="card-custom">
                            <Card.Body>
                                <div className="card-content">
                                    <p><strong>User Name : </strong> {item.firstname}</p>
                                    <p><strong>Product Name : </strong> {item.email}</p>
                                    <p><strong>Phone Number : </strong> {item.phoneno}</p>
                                    <p><strong>Product ID : </strong> {item.productId}</p>
                                    <p><strong>User ID : </strong> {item.userId}</p>


                                </div>
                                {index < data.length - 1 && <hr className="divider" />}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default All;
