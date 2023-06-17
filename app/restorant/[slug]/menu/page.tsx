import Header from '@/app/component/Header'
import Navbar from '@/app/component/Navbar'
import Link from 'next/link'
import React from 'react'
import RastaurantNavbar from '../component/RastaurantNavbar'
import Menu from '../component/Menu'

export default function RestaurantMenu() {
  return (
    <><main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
          <RastaurantNavbar/>
            {/* RESAURANT NAVBAR */} {/* MENU */}
           <Menu/>
            {/* MENU */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
    </>
  )
}
