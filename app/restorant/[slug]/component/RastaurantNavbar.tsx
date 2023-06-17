import Link from 'next/link'
import React from 'react'

const RastaurantNavbar = () => {
  return (
    <nav className="flex text-reg border-b pb-2">
    <Link href="/restorant/milestones-page" className="mr-7"> Overview </Link>
    <Link href="/restorant/milestones-page/menu" className="mr-7"> Menu </Link>
  </nav>
  )
}

export default RastaurantNavbar