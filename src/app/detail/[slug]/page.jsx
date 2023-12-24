// export default function Page({ params, searchParams }) {
//     return <h1>My Page {params.slug}</h1>
//   }

"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import Card from "../../components/card/card";
import NavigationBar from "../../components/card/navigationbar";
import ImageShip from "../../components/card/image";
export default function Detail({ params, searchParams }) {
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

  const handleStatusChange = async () => {
    try {
      const response = await fetch(
        `https://oprec-betis-be.up.railway.app/perahu/${data.perahu.id}/berlayar`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTUxYTFmZi1kZDA3LTQ1ZjAtYmRlZC0xNzZjZDExNDIzODEiLCJpZCI6ImM5NTFhMWZmLWRkMDctNDVmMC1iZGVkLTE3NmNkMTE0MjM4MSIsInVzZXJuYW1lIjoibXVyaWZxIiwiaWF0IjoxNzAyNjQxMjUyLCJleHAiOjE3MDUyMzMyNTJ9.S-MNOLWJkQwZ5hZSXIgGLp1trU0tWwWtAjaFQY4jlVc`,
          },
          body: JSON.stringify({ is_sailing: true }), // Modify the payload as needed
        }
      );
  
      if (!response.ok) {
        console.error(`An error occurred: ${response.statusText}`);
        return;
      }
  
      console.log("Perahu status changed to Berlayar successfully");
      // You can perform additional actions after a successful status change if needed
    } catch (error) {
      console.error("An error occurred while changing perahu status:", error);
    }
  };

  if (data != null) {
    if (data.perahu.is_sailing == false) {
      var status = "Berlabuh";
      return (
        <div>
          <NavigationBar position={"else"}></NavigationBar>
          {data ? (
            <div className="main">
              <div className="thumbnail-berlabuh">
                <ImageShip className="gambarKapal"></ImageShip>
              </div>
              <div className="datas">
                <div className="buttons">
                  <a className="deleteBtn" href="/main" onClick={handleDelete}>
                    Delete Perahu
                  </a>
                  <a className="editBtn"  href={`/edit/${data.perahu.id}`} >
                    Edit Perahu
                  </a>
                  <a className="statusEditBtn" onClick={handleStatusChange} href="/main">
                    Berlayar
                  </a>
                </div>

                <div className="description">
                  <p>ID: {data.perahu.id}</p>
                  <p>Nama: {data.perahu.name}</p>
                  <p>Kapasitas: {data.perahu.capacity}</p>
                  <p>Warna: {data.perahu.color}</p>
                  <p>
                    Status: <span className="berlabuh">{status}</span>
                  </p>

                  <p>Description: {data.perahu.description}</p>
                  <p>Bought at: {data.perahu.bought_at}</p>
                  <p>Updated at: {data.perahu.updated_at}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="main">
              <p>Loading...</p>
            </div>
          )}
        </div>
      );
    } else {
      var status = "Berlayar";
      return (
        <div>
          <NavigationBar position={"else"}></NavigationBar>
          {data ? (
            <div className="main">
              <div className="thumbnail-berlayar">
                <ImageShip className="gambarKapal"></ImageShip>
              </div>
              <div className="datas">
                <div className="buttons">
                  <a className="deleteBtn" href="/main" onClick={handleDelete}>
                    Delete Perahu
                  </a>
                  <a className="editBtn"  href={`/edit/${data.perahu.id}`} >
                    Edit Perahu
                  </a>
                </div>

                <div className="description">
                  <p>ID: {data.perahu.id}</p>
                  <p>Nama: {data.perahu.name}</p>
                  <p>Kapasitas: {data.perahu.capacity}</p>
                  <p>Warna: {data.perahu.color}</p>
                  <p>
                    Status: <span className="berlayar">{status}</span>
                  </p>

                  <p>Description: {data.perahu.description}</p>
                  <p>Bought at: {data.perahu.bought_at}</p>
                  <p>Updated at: {data.perahu.updated_at}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="main">
              <p>Loading...</p>
            </div>
          )}
        </div>
      );
    }
  }
}
