'use client'
import { useAuthStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
    const { isLogin } = useAuthStore();
    const router = useRouter();
  
    useEffect(() => {
      if (!isLogin) {
        router.push('/login'); // Redirect to login on unauthorized access
      }
    }, [isLogin, router]);
  
    return isLogin ? children : null; // Render content only if logged in
  }
