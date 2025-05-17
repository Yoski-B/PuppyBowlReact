
import AllPlayers from "./AllPlayers"
import { useSearchParams, Link, useNavigate } from "react-router-dom"
import {useState, useEffect} from "react";


const SearchForPlayers = ({allPlayers}) =>{

const [searchParams] = useSearchParams ()
const [searchResults, setSearchResults] = useState ([])

const nameSearch = searchParams.get ("player")
const navigate = useNavigate()
console.log(nameSearch)

useEffect (() => {

  const result = allPlayers.filter((player) =>{
    return player.name.toLowerCase().includes(nameSearch) 
})
  console.log (result)
  setSearchResults(result)
},[allPlayers])


const clearSearch = () =>{
  setSearchResults([])
  navigate ('/all')
}


return (
  <div className="playersContainer">
  {  
        
    searchResults.map((player)=>{ 
      return (
        <div key={player.id} className= "player">
            <Link to={`/all/${player.id}`}>
            <h3>{player.name}</h3>
            </Link>
            <img src ={player.image ? player.image : null} alt={player.name}/>
         </div>
       )
    })
} 
    <div>
        <button onClick={() =>clearSearch()}>Clear Search Results</button>
    </div>

  </div>
    
)
}




/*({formData, setSearchResults})=>{
  const target = formData.get("searchBar").toLowerCase()
  navigate (`/all/search/?player=${target}`)
  /*const result = AllPlayers.filter((player) =>{
        return player.name.toLowerCase().includes(target) 
       
  })
  console.log(result)
  setSearchResults(result)*/

  
export default SearchForPlayers