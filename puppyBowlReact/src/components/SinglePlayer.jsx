import { useParams, useNavigate } from "react-router-dom"
import AllPlayers from "./AllPlayers"
import App from "../App"
import NavBar from "./NavBar"
import SearchForPlayers from "./SearchResults"

const SinglePlayer = ({players}) =>{
  const params = useParams()
  console.log(params)
  const id = params.id*1

  const navigate = useNavigate()
  
const player = players.find((player) => {
        return player.id === id

  })

  return(
    // {player ? (<h1>{player.name}</h1>) : <h1>Loading...</h1>}
    
     <div>
    {
          player ? (
            <div>
            <h3>{player.name}</h3>
            <p>Breed:{player.breed}</p>
            <p>Status:{player.status}</p>
            <img src ={player.image ? player.image : null} alt ={player.name} />
      </div>  
          ) :(
            <h3>Loading...</h3>
          )
      }
          
       <button onClick={() => {navigate ('/all')}}>Return to All Puppy Players</button>
     </div>
  )
 
}
 
 
 export default SinglePlayer