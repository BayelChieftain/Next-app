import { useState } from "react"
import { FilmDetails} from "./components/FilmDetails"

export default function Home() {
  return (
    <div>
      <header />
      <FilmDetails
       title="The simsons" 
       genre="comedy" 
       seasonsCount='2' />
      <footer />
    </div>
  )
}
