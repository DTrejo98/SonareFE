'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createClip, updateClip } from '../../api/ClipData';

const initialState = {
  name: '',
  description: '',
  price: '',
  quantity: '',
  category: '',
};

function ClipForm({ obj = initialState }) {
  const { user } = useAuth();
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (obj.id) {
      setFormInput({
        ...obj,
      });
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, sellerId: user.uid }; // Set the sellerId to the logged-in user's UID
    if (obj.id) {
      updateClip(payload).then(() => router.push('/product'));
    } else {
      createClip(payload).then(() => router.push('/product'));
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Product</h2>

      {/* Name input */}
      <FloatingLabel controlId="floatingInput1" label="Product Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Product Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>

      {/* Description input */}
      <FloatingLabel controlId="floatingInput2" label="Description" className="mb-3">
        <Form.Control type="text" placeholder="Enter Product Description" name="description" value={formInput.description} onChange={handleChange} required />
      </FloatingLabel>

      {/* Price input */}
      <FloatingLabel controlId="floatingInput3" label="Price" className="mb-3">
        <Form.Control type="number" placeholder="Enter Price" name="price" value={formInput.price} onChange={handleChange} required />
      </FloatingLabel>

      {/* Quantity input */}
      <FloatingLabel controlId="floatingInput4" label="Quantity" className="mb-3">
        <Form.Control type="number" placeholder="Enter Quantity" name="quantity" value={formInput.quantity} onChange={handleChange} required />
      </FloatingLabel>

      {/* Category input */}
      <FloatingLabel controlId="floatingInput5" label="Category" className="mb-3">
        <Form.Control type="text" placeholder="Enter Category" name="category" value={formInput.category} onChange={handleChange} required />
      </FloatingLabel>

      {/* Submit button */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Product</Button>
    </Form>
  );
}

ClipForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    category: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default ClipForm;
