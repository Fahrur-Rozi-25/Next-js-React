import Link from "next/link"
import Homes from "./app"
import Apps from "./navbar"
import Navbar from "./navbar"
import Boot from "./bootstrap"
import Images from "./img"
import Image from "next/image"
import Header1 from "@/components/global/header"
import MyComponent from "./img"

function Main() {
  return (
    <div className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim odio ea accusamus officia iste nam est incidunt vitae quam.
    </div>
  )
}




export default function Home() {
  return (
    <>
    <Navbar />
    <Main />
    <nav>
        <Link href="/dashboard">Dashboard</Link>
    </nav>
    <Homes />
    <Boot />
    <Header1 />
    <MyComponent />
    

    </>
    
  )
}