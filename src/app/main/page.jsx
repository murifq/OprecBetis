"use client"

import React, { useEffect, useState } from "react";
// import ImageShip from './components/card/image'
import Card from "../components/card/card";

import ImageShip from "../components/card/image";
export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://oprec-betis-be.up.railway.app/perahu', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTUxYTFmZi1kZDA3LTQ1ZjAtYmRlZC0xNzZjZDExNDIzODEiLCJpZCI6ImM5NTFhMWZmLWRkMDctNDVmMC1iZGVkLTE3NmNkMTE0MjM4MSIsInVzZXJuYW1lIjoibXVyaWZxIiwiaWF0IjoxNzAyNjQxMjUyLCJleHAiOjE3MDUyMzMyNTJ9.S-MNOLWJkQwZ5hZSXIgGLp1trU0tWwWtAjaFQY4jlVc`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                console.error(`An error occurred: ${response.statusText}`);
                return;
            }

            const data = await response.json();
            console.log(data);
            setData(data);
        };

        fetchData();
    }, []);

    return(
        <div>
            {data ? (
                <div>
                    <p>{data.message}</p>
                    <p>{data.jumlahPerahu}</p>
                    {data.daftarPerahu.map((perahu, index) => (
                        <div key={index}>
                            <Card name={perahu.name} capacity={perahu.capacity} color={perahu.color} is_sailing={perahu.is_sailing}></Card>
                            {/* <ImageShip></ImageShip> 
                            <p>{perahu.name}</p>
                            <p>{perahu.description}</p>
                            <p>{perahu.capacity}</p>
                            <p>{perahu.color}</p>
                            <p>{perahu.is_sailing ? 'Sailing' : 'Not Sailing'}</p> */}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
