import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch user profile info on component mount
    fetch('/profile', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 401) {
          // If the user is not authenticated, redirect to the login page
          navigate('/login')
          return null
        }
        return res.json()
      })
      .then((data) => {
        if (data) {
          setUser(data) // Set user data if fetched successfully
        }
        setLoading(false) // Stop loading after response is received
      })
      .catch((error) => {
        console.error('Error fetching profile:', error)
        setLoading(false)
        navigate('/login') // In case of any error (e.g., network issue), redirect to login
      })
  }, [navigate])

  if (loading) return <p style={{ color: 'white' }}>Loading profile...</p>

  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      {user ? (
        <div
          style={{
            maxWidth: '500px',
            margin: 'auto',
            backgroundColor: '#111',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
            textAlign: 'center',
          }}
        >
          <img
            src="https://i.ibb.co/7SDFxbr/gym-avatar.png"
            alt="Profile"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              marginBottom: '20px',
              border: '3px solid #28a745',
            }}
          />
          <h1 style={{ color: '#28a745', marginBottom: '10px' }}>
            {user.name}
          </h1>
          <p style={{ color: '#ccc', fontSize: '18px' }}>{user.email}</p>
          <p
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#ffc107',
              color: '#000',
              display: 'inline-block',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            {user.role === 'trainer' ? '🏋️ Trainer' : '👤 Member'}
          </p>

          <div style={{ marginTop: '30px' }}>
            <h2 style={{ color: '#f39c12', marginBottom: '10px' }}>
              🔥 Stay Strong
            </h2>
            <p style={{ color: '#aaa' }}>
              Keep pushing limits, {user.name}. Core Cult is proud to have you!
            </p>
          </div>
        </div>
      ) : (
        <p style={{ color: 'white' }}>Not logged in</p>
      )}
    </div>
  )
}

export default Profile
