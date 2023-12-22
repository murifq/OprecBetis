"use client"

import React, { useEffect, useState } from "react";
import './page.css';
import Card from "../components/card/card";
import NavigationBar from "../components/card/navigationbar";
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
            <NavigationBar></NavigationBar>
            {data ? (
                <div className="main">
                    <p>{data.message}</p>
                    <p>{data.jumlahPerahu}</p>
                    <ul  id="list-books">
                    {data.daftarPerahu.map((perahu, index) => (
                            <Card name={perahu.name} capacity={perahu.capacity} color={perahu.color} is_sailing={perahu.is_sailing} id ={perahu.id}></Card>
                            ))}
                    </ul>
                </div>
            ) : (
                <div className ="main">
                    <p>Loading...</p>
                </div>
            )}
        </div>
    )
}
