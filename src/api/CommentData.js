import { firebaseConfig } from '@/utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all comments
const getAllComments = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a single comment by ID
// const getSingleComment = (id) =>
//   new Promise((resolve, reject) => {
//     fetch(`${endpoint}/comments/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch(reject);
//   });

// Create a new comment
const createComment = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/comments`, {
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

// Update an existing comment
const updateComment = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/comments/${payload.id}`, {
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

// Delete an comment by ID
const deleteComment = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/comments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllComments, createComment, updateComment, deleteComment };
