'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useAuth } from '../utils/context/authContext';
import { getSingleUser } from '../api/UserData';
import UserForm from '../components/Forms/UserForm';

function Home() {
  const { user } = useAuth(); // Get current authenticated user from auth context
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    if (user) {
      getSingleUser(user.uid)
        .then((data) => {
          setProfile(data); // Store profile data in state
          setLoading(false); // Stop loading
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
          setLoading(false); // Stop loading in case of error
        });
    } else {
      setLoading(false); // No user, stop loading
    }
  }, [user]);

  // If loading, show a loading message
  if (loading) {
    return (
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  // If no user is logged in, ask them to sign in
  if (!user) {
    return (
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Welcome to Next.js!</h1>
        <p>Please sign in with Google to continue.</p>
      </div>
    );
  }

  // If the profile exists, show profile info
  if (profile) {
    return (
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Welcome back, {profile.username}!</h1>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Role:</strong> {profile.role}
        </p>
      </div>
    );
  }

  // If no profile is found, show the NewUserForm to complete the profile
  const handleProfileUpdate = () => {
    // Re-fetch user data or redirect after creating account
    router.reload(); // This will reload the page and fetch updated data
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome to Next.js!</h1>
      <p>Your profile has not been completed yet. Please fill out your information.</p>
      <UserForm obj={{ uid: user.uid }} onSuccess={handleProfileUpdate} /> {/* Pass onSuccess callback */}
    </div>
  );
}

export default Home;