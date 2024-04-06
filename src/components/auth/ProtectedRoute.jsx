'use client'
import { useAuthStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function ProtectedRoute({ children }) {
    const [isMounted, setIsMounted] = useState(false)
    const { user } = useAuthStore();
    const router = useRouter();


    useEffect(()=>{
      setIsMounted(true)
    },[])
    useEffect(() => {
      if (!user) {
        router.push('/login'); // Redirect to login on unauthorized access
      }
    }, [user, router]);
  
    if(!isMounted){
      return null
    }
    return user ? children : null; // Render content only if logged in
  }
