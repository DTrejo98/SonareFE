'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '@/utils/context/authContext'; // ✅ Use alias for cleaner imports
import { createUser, updateUser } from '@/api/UserData'; // ✅ Adjust if your path is different

const initialState = {
  username: '',
  email: '',
  password: '',
  uid: '',
};

function UserForm({ obj = initialState }) {
  const { user } = useAuth();
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  // Populate form if editing or user is logged in
  useEffect(() => {
    if (user) {
      setFormInput({
        username: obj.username || '',
        email: obj.email || '',
        password: '', // never prefill password
        uid: obj.uid || user.uid,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formInput,
      uid: user.uid,
    };

    if (obj.id) {
      updateUser({ ...payload, id: obj.id }).then(() => router.push(`/profile/${user.uid}`));
    } else {
      createUser(payload).then(() => router.push(`/profile/${user.uid}`));
    }
  };

  if (!user) return <p className="text-white">Loading...</p>;

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Account</h2>

      <FloatingLabel controlId="floatingInput1" label="Username" className="mb-3">
        <Form.Control type="text" placeholder="Enter Username" name="username" value={formInput.username} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="Enter Email" name="email" value={formInput.email} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Enter Password" name="password" value={formInput.password} onChange={handleChange} required={!obj.id} />
      </FloatingLabel>

      <Button type="submit" className="mt-2">
        {obj.id ? 'Update' : 'Create'} Account
      </Button>
    </Form>
  );
}

UserForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default UserForm;
