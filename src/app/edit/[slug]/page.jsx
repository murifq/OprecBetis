"use client";

import { useForm } from "react-hook-form";
import React from "react";
import { useHistory } from "react-router-dom";
import NavigationBar from "../../components/card/navigationbar";
import "./page.css";

const EditPerahuForm = ({ params, searchParams }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // Convert the 'capacity' value to a number
    data.capacity = parseInt(data.capacity, 10);

    try {
      // Perform your API call to create a new perahu
      const response = await fetch(
        `https://oprec-betis-be.up.railway.app/perahu/${params.slug}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTUxYTFmZi1kZDA3LTQ1ZjAtYmRlZC0xNzZjZDExNDIzODEiLCJpZCI6ImM5NTFhMWZmLWRkMDctNDVmMC1iZGVkLTE3NmNkMTE0MjM4MSIsInVzZXJuYW1lIjoibXVyaWZxIiwiaWF0IjoxNzAyNjQxMjUyLCJleHAiOjE3MDUyMzMyNTJ9.S-MNOLWJkQwZ5hZSXIgGLp1trU0tWwWtAjaFQY4jlVc`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Perahu edited successfully");
        history.push("/main");
        // Optionally, you can redirect the user or perform other actions
      } else {
        console.error("Failed to edit perahu");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  const handleLinkClick = (event) => {
    // Manually trigger the form submission
    handleSubmit(onSubmit)();
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NavigationBar position={"else"}></NavigationBar>

        <div className="edit-form">
          <label>
            <div>
            Nama
            </div>
            <input {...register("name")} />
          </label>

          <label>
            <div>
            Description:
            </div>
            <input {...register("description")} />
          </label>

          <label>
            <div>
            Capacity:
            </div>
            <input type="number" {...register("capacity")} />
          </label>

          <label>
            <div>
            Color: 
            </div>
            <input {...register("color")} />
          </label>

          <a onClick={handleLinkClick} href="/main" className="edit-btn">
            Edit Perahu
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditPerahuForm;
