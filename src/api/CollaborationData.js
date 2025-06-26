import { firebaseConfig } from '../utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all collaborations
const getAllCollaborations = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/collaborations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a single collaboration by ID
const getSingleCollaboration = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/collaborations/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a new collaboration
const createCollaboration = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/collaborations`, {
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

// Update an existing collaboration
const updateCollaboration = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/collaborations/${payload.id}`, {
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

// Delete an collaboration by ID
const deleteCollaboration = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/collaborations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllCollaborations, getSingleCollaboration, createCollaboration, updateCollaboration, deleteCollaboration };
