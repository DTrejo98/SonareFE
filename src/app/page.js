'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getSingleUser } from '../api/UserData';
import UserForm from '../components/Forms/UserForm';
import { signIn } from '../utils/auth';

function Home() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      getSingleUser(user.uid)
        .then((data) => {
          setProfile(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

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
        <h1>Welcome to Sonare!</h1>
        <p>Please sign in with Google to continue.</p>
        <Button onClick={signIn} variant="primary">
          Sign in with Google
        </Button>
      </div>
    );
  }

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
      </div>
    );
  }

  const handleProfileUpdate = () => {
    router.reload();
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
      <h1>Welcome to Sonare!</h1>
      <p>Your profile has not been completed yet. Please fill out your information.</p>
      <UserForm obj={{ uid: user.uid }} onSuccess={handleProfileUpdate} />
    </div>
  );
}

export default Home;
