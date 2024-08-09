import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

const CartDetails = () => {
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cartdetails');
                setCartData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchCartData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Your Cart Details</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {cartData.map((item) => (
                    <Col key={item.email}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Name: {item.firstname}</Card.Title>
                                <Card.Text>
                                    <strong>Product Name :</strong> {item.email} <br />
                                    <strong>Phone Number:</strong> {item.phoneno}
                                    <strong>Product Name: </strong>{item.lastname}
                                    <strong>Product ID : </strong>{item.productId}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CartDetails;
