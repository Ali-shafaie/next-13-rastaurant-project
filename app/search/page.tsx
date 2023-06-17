import Link from 'next/link'
import React from 'react'
import Header from './component/Header'
import SearchSideBar from './component/SearchSideBar'
import RestaurantCard from './component/RestaurantCard'
import Navbar from '../component/Navbar'

export default function Search() {
  return (
    <div><main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}
          <SearchSideBar />
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <RestaurantCard />
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
    </div>
  )
}
