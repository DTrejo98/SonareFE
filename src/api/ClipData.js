import { firebaseConfig } from '@/utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all Clips
const getAllClips = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/clips`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a single clip by ID
const getSingleClip = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/clips/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a new clip
const createClip = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/clips`, {
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

// Update an existing clip
const updateClip = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/clips/${payload.id}`, {
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

// Delete an clip by ID
const deleteClip = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/clips/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllClips, getSingleClip, createClip, updateClip, deleteClip };
