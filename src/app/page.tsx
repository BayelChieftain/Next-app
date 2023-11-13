"use client"
import { FilmDetails} from "./components/FilmDetails"
import { Reviews } from "./components/Review/Review"
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
       <Reviews reviews={[]}
       />
      <footer />
    </div>
  )
}
