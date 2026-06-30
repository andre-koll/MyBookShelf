import React, { useEffect, useState } from 'react';
import LoadingSpinner from "@/components/layout/LoadingSpinner"
// import { loadEnvConfig } from '@next/env'
// import dotenv from 'dotenv';

export default function Counter({ userId, action }: { userId: string; action: string }) {
    // console.log(action);
    const [total, setTotal] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Fetch data from an API on the client side
        const fetchData = async () => {
        // const res = await fetch('http://localhost:3000/api/' + action);
        const res = await fetch(process.env.NEXT_PUBLIC_APP_API_URL + action);
        const data = await res.json();
        setTotal(data);
        setLoading(false);
        };
        fetchData();
    }, []);
    if (loading) {
        return <LoadingSpinner />;
    }
    return total
}