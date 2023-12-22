// export default function Page({ params, searchParams }) {
//     return <h1>My Page {params.slug}</h1>
//   }

"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import Card from "../../components/card/card";
import NavigationBar from "../../components/card/navigationbar";
import ImageShip from "../../components/card/image";
export default function Home({ params, searchParams }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://oprec-betis-be.up.railway.app/perahu/${params.slug}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTUxYTFmZi1kZDA3LTQ1ZjAtYmRlZC0xNzZjZDExNDIzODEiLCJpZCI6ImM5NTFhMWZmLWRkMDctNDVmMC1iZGVkLTE3NmNkMTE0MjM4MSIsInVzZXJuYW1lIjoibXVyaWZxIiwiaWF0IjoxNzAyNjQxMjUyLCJleHAiOjE3MDUyMzMyNTJ9.S-MNOLWJkQwZ5hZSXIgGLp1trU0tWwWtAjaFQY4jlVc`,
            "Content-Type": "application/json",
          },
        }
      );

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

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://oprec-betis-be.up.railway.app/perahu/${data.perahu.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTUxYTFmZi1kZDA3LTQ1ZjAtYmRlZC0xNzZjZDExNDIzODEiLCJpZCI6ImM5NTFhMWZmLWRkMDctNDVmMC1iZGVkLTE3NmNkMTE0MjM4MSIsInVzZXJuYW1lIjoibXVyaWZxIiwiaWF0IjoxNzAyNjQxMjUyLCJleHAiOjE3MDUyMzMyNTJ9.S-MNOLWJkQwZ5hZSXIgGLp1trU0tWwWtAjaFQY4jlVc`,
          },
        }
      );

      if (!response.ok) {
        console.error(`An error occurred: ${response.statusText}`);
        return;
      }

      console.log("Perahu deleted successfully");
      // You can perform additional actions after successful deletion if needed
    } catch (error) {
      console.error("An error occurred while deleting perahu:", error);
    }
  };

  return (
    <div>
      <NavigationBar />
      {data ? (
        <div className="main">
          <Card
            id={data.perahu.id}
            name={data.perahu.name}
            capacity={data.perahu.capacity}
            color={data.perahu.color}
            is_sailing={data.perahu.is_sailing}
          />
          <p>Description: {data.perahu.description}</p>
          <p>Bought at: {data.perahu.bought_at}</p>
          <p>Updated at: {data.perahu.updated_at}</p>
          <a href="/main" onClick={handleDelete}>
            Delete Perahu
          </a>
        </div>
      ) : (
        <div className="main">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
