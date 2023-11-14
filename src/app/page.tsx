"use client"
import { FilmDetails} from "./components/FilmDetails"

const nm = 2
export default function Home() {
  return (
    <div>
      <header />
      <FilmDetails
       title="The simsons" 
       genre="comedy" 
       seasonsCount={nm} 
       />
       
      <footer />
    </div>
  )
}
