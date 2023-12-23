'use client'

import { useForm } from 'react-hook-form';
import React from 'react';

const AddPerahuForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // Convert the 'capacity' value to a number
    data.capacity = parseInt(data.capacity, 10);
  
    try {
      // Perform your API call to create a new perahu
      const response = await fetch('https://oprec-betis-be.up.railway.app/perahu', {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTUxYTFmZi1kZDA3LTQ1ZjAtYmRlZC0xNzZjZDExNDIzODEiLCJpZCI6ImM5NTFhMWZmLWRkMDctNDVmMC1iZGVkLTE3NmNkMTE0MjM4MSIsInVzZXJuYW1lIjoibXVyaWZxIiwiaWF0IjoxNzAyNjQxMjUyLCJleHAiOjE3MDUyMzMyNTJ9.S-MNOLWJkQwZ5hZSXIgGLp1trU0tWwWtAjaFQY4jlVc`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Perahu added successfully');
        // Optionally, you can redirect the user or perform other actions
      } else {
        console.error('Failed to add perahu');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

  const handleLinkClick = () => {
    // Manually trigger the form submission
    handleSubmit(onSubmit)();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register('name')} />
      </label>

      <label>
        Description:
        <input {...register('description')} />
      </label>

      <label>
        Capacity:
        <input type="number" {...register('capacity')} />
      </label>

      <label>
        Color:
        <input {...register('color')} />
      </label>

      <a href="" onClick={handleLinkClick}>Add Perahu</a>
    </form>
  );
};

export default AddPerahuForm;
