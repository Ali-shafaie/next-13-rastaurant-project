import Navbar from './component/Navbar';
import Header from './component/Header';
import RestautrantCard from './component/RestautrantCard';
export default function Home() {

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main>
          {/* HEADER */}
          <Header />
          {/* HEADER */} {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap ">
            {/* CARD */}
            <RestautrantCard/>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>

  )
}
