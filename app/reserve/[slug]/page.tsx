import Link from 'next/link'
import React from 'react'
import Header from './component/Header'
import Navbar from '@/app/component/Navbar'
import Form from './component/Form'

const ReservationPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
   <Navbar/>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
         <Header/>
           {/* FORM */}
        <Form/>
        </div>
      </div>
    </main>
  </main>
  
  )
}

export default ReservationPage