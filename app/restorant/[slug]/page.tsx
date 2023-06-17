import Navbar from '@/app/component/Navbar'
import React from 'react'
import Header from './component/Header'
import RastaurantNavbar from './component/RastaurantNavbar'
import Description from './component/Description'
import Rating from './component/Rating'
import Title from './component/Title'
import Images from './component/Images'
import Reveiw from './component/Reveiw'
import ReservationCard from './component/ReservationCard'

export default function RestaurantDetail() {
  return (
    <>
   <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    <Navbar/>
  <Header/>
    {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[70%] rounded p-3 shadow">
      <RastaurantNavbar/>
       <Title/>
        <Rating/>
        <Description/>
      <Images/>
       <Reveiw/>
      </div>
      <ReservationCard/>
    </div>
  </main>
</main>


    </>
  )
}
