'use client';

import React from 'react';
import ProductForm from '../../../components/Forms/ClipForm'; // Adjust import based on your file structure

export default function CreateClipPage() {
  return (
    <div className="text-center my-4">
      <h2>Create a New Product</h2>
      <ProductForm /> {/* Render the ProductForm component */}
    </div>
  );
}
