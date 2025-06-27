'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/utils/context/authContext';
import { getSingleUser } from '@/api/UserData';

export default function ProfilePage() {
  const { user } = useAuth(); // Comes from ClientProvider wrapping the app
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.uid) {
      getSingleUser(user.uid)
        .then((data) => {
          setProfile(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error loading profile:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h2>Loading profile...</h2>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center mt-5">
        <h2>No profile data found.</h2>
      </div>
    );
  }

  return (
    <div className="container text-white mt-5">
      <h1 className="mb-4">Profile</h1>
      <p>
        <strong>Username:</strong> {profile.username}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>

      {/* === CLIPS === */}
      <div className="mt-5">
        <h4>Clips ({profile.clips?.length ?? 0})</h4>
        {profile.clips.length > 0 ? (
          <ul>
            {profile.clips.map((clip) => (
              <li key={clip.id} className="mb-2">
                <strong>{clip.title}</strong> — {clip.description}
                <br />
                <ul className="mt-2">
                  <li>
                    <strong>Comments:</strong> {clip.comments?.length ?? 0}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No clips posted yet.</p>
        )}
      </div>

      {/* === COMMENTS === */}
      <div className="mt-5">
        <h4>Comments ({profile.comments?.length ?? 0})</h4>
        {profile.comments.length > 0 ? (
          <ul>
            {profile.comments.map((comment) => (
              <li key={comment.id} className="mb-2">
                <strong>{comment.clip?.title || 'Unknown Clip'}:</strong> {comment.body}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments made yet.</p>
        )}
      </div>

      {/* === COLLABORATIONS === */}
      <div className="mt-5">
        <h4>Collaborations ({profile.clipCollaborations?.length ?? 0})</h4>
        {profile.clipCollaborations.length > 0 ? (
          <ul>
            {profile.clipCollaborations.map((collab) => (
              <li key={collab.id}>
                {/* Adjust this once you decide how to display collaborations */}
                Collaboration #{collab.id}
              </li>
            ))}
          </ul>
        ) : (
          <p>No collaborations yet.</p>
        )}
      </div>
    </div>
  );
}
