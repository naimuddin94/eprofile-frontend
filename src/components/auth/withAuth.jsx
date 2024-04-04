'use client'
import { useLoginStore } from '@/store/userStore'
import { redirect } from 'next/navigation'
import React, {  useEffect } from 'react'

export default function withAuth(Component) {

    return function WithAuth(props){
        const isLogin = useLoginStore()
        
        useEffect(()=>{
            if(!isLogin){
                redirect('/')
            }
            // console.log(isLogin)
        },[isLogin]);
        if(!isLogin){
           return null
        }

        return <Component {...props}/>
    }
}
