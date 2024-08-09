import React, { useEffect, useState } from 'react';
import axios from 'axios';

const All = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/get');
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
            <h2>Data from the server</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.email} - {item.password} {item.firstname} {item.lastname} {item.phoneno}</li>

                ))}
            </ul>
        </div>
    );
};

export default All;
