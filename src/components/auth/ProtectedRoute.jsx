'use client'
import { useAuthStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
    const { user } = useAuthStore();
    const router = useRouter();
  
    useEffect(() => {
      if (!user) {
        router.push('/login'); // Redirect to login on unauthorized access
      }
    }, [user, router]);
  
    return user ? children : null; // Render content only if logged in
  }
