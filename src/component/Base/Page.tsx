import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import NavigationBarLeft from '../NavigationBarLeft/NavigationBarLeft'
export default function Page({ children }: {children: React.ReactNode}) {
    return (
    <>
    <NavigationBar />
    <div style={{ marginTop: '50px', marginLeft: '16%' }}> {children} </div>
    <NavigationBarLeft />
    </>
    )
}