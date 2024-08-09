import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCartDetails = () => {
    const [cartItems, setCartItems] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id; // Use a unique identifier for the user

    useEffect(() => {
        const fetchCartDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/user/${userId}`);
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart details:', error);
            }
        };
        fetchCartDetails();
    }, [userId]);

    const updateItem = async (itemId) => {
        try {
            // You may need to customize the request body as per your API's requirements
            const updatedItem = { /* updated item data */ };
            const response = await axios.put(`http://localhost:8080/cart/${itemId}`, updatedItem);
            setCartItems(prevItems => prevItems.map(item => (item.id === itemId ? response.data : item)));
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const deleteItem = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8080/cart/${itemId}`);
            setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <h2>Cart Details</h2>
            <ul>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <li key={item.id}>
                            <strong>User Name : </strong> {item.firstname} <br />
                            <strong>Product Name : </strong> {item.lastname} <br />
                            <strong>Product Description : </strong> {item.email} <br />
                            <strong>Phone No:</strong> {item.phoneno} <br />
                            <button onClick={() => updateItem(item.id)}>Update</button>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No items in cart</p>
                )}
            </ul>
        </div>
    );
};

export default UserCartDetails;
