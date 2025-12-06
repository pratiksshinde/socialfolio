'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { checkResume } from '@/services/userService';

function SocialFolio() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuthAndResume = async () => {
      try {
        // Step 1: Check if token exists in cookies
        const token = Cookies.get('token');

        if (!token) {
          // No token found, redirect to login
          router.push('/Login');
          return;
        }

        // Step 2: Token exists, check if resume exists
        try {
          const response = await checkResume();

          // If resume exists, redirect to profile
          if (response.hasResume) {
            router.push('/Profile');
          } else {
            // Resume doesn't exist, redirect to create profile
            router.push('/CreateProfile');
          }
        } catch (error) {
          console.error('Error checking resume:', error);
          // If API fails, redirect to create profile as fallback
          router.push('/CreateProfile');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        router.push('/Login');
      } finally {
        setIsChecking(false);
      }
    };

    checkAuthAndResume();
  }, [router]);

  // Show loading state while checking authentication
  if (isChecking) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading...
      </div>
    );
  }

  return null;
}

export default SocialFolio;