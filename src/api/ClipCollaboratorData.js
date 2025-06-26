import { firebaseConfig } from '../utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all clip collaborators
const getAllClipCollaborators = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/clip-collaborators`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a clip collaborator by clipId and userId
const getClipCollaboratorByIds = (clipId, userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/clip-collaborators/${clipId}/${userId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a clip collaborator
const createClipCollaborator = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/clip-collaborators`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Delete a clip collaborator by clipId and userId
const deleteClipCollaborator = (clipId, userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/clip-collaborators/${clipId}/${userId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllClipCollaborators, getClipCollaboratorByIds, createClipCollaborator, deleteClipCollaborator };
