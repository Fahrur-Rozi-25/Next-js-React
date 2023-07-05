import Link from "next/link"
import Header1 from "@/components/global/header"
import Date1 from "@/components/global/date"
import React from "react"
import OnClick from "@/components/event/onclick"
import Desc from "@/components/event/desc"
import UseState from "@/components/event/useState"
import Clock from "@/feature/clock"
import MTK from "@/feature/math"
import Ref from "@/components/event/useRef"
import Swipers from "@/components/global/swiper"
import ScrollingText from "@/components/information/scrollingText"






export default function Home() {
  return (
    <>
      <h1 className="text-center">Judul Halaman</h1>
      <ScrollingText />
      <Swipers />

      <div className="text-center font-extrabold">
    <Clock />
    <Ref />
      </div>
    </>

    

  //   <div className="text-center font-extrabold">
  //   <Swipers />
  //  <Header1 />
  //  <Clock />
  //   <Date1 />
  //   <Desc />
  //   <UseState />
  //   <Ref />
  //   <button onClick={OnClick}>Muncul Di Console</button>
  //   </div>
    
  )
}