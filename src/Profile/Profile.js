import React from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));

    const productName = "Samsung";
    const productId = "0100"; 
    const productDesc = "Samsung Smart Mobile Phone";
    const productid =1;

    const sss = user.userId;
    const aa = user.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/save', {
              userId: user.id,
                firstname: user.firstname,
                lastname: productName,
                email: productDesc,
                phoneno: user.phoneno,
                productId:productId // Use a unique identifier for the user
            });
            alert('Product added to cart successfully!');
            alert(sss);
        } catch (error) {
            console.error('Error adding product to cart:', error);
            alert(`Failed to add product to cart: ${error.response ? error.response.data.message : error.message}`);
            alert(sss);
            alert(aa);

          }
    };

    const handleViewCart = () => {
        navigate('/usercartdetails'); // Navigate to the CartDetails page
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="/images/abc.png" alt="Product Image" />
                <Card.Body>
                    <Card.Title>Product Information</Card.Title>
                    <Card.Text>
                        <strong>Product Name:</strong> {productName} <br />
                        <strong>Description:</strong> {productDesc} <br />
                    </Card.Text>
                    <Button variant="primary" onClick={handleSubmit}>Add to Cart</Button>
                    <Button variant="secondary" onClick={handleViewCart} className="mt-2">View Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;
