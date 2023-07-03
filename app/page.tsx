import Link from "next/link"
import Header1 from "@/components/global/header"
import Date1 from "@/components/global/date"
import React from "react"
import OnClick from "@/components/event/onclick"
import Desc from "@/components/event/desc"
import UseState from "@/components/event/useState"





export default function Home() {
  return (
    <div className="text-center mt-7 font-extrabold">
   <Header1 />
    <Date1 />
    <Desc />
    <UseState />
    <button onClick={OnClick}>submit</button>
    </div>
    
  )
}