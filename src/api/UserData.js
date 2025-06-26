import { firebaseConfig } from '@/utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all users
const getAllUsers = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a single user by ID
const getSingleUser = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/users/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a new user
const createUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Update user details
const updateUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/users/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Delete a user
const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };
