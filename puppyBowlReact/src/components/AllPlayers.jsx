import { Link } from "react-router-dom"
import "../App.css"
import axios from "axios"
import searchForPlayers from "./SearchResults"


const AllPlayers= ({players, setAllPlayers, /*setSearchResults*/}) =>{
 
  const deletePlayer = async (id) =>{
    try {
      await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players/${id}`)
      const newPlayers = players.filter((player) =>{
            return player.id !== id
      })
      setAllPlayers(newPlayers)
    } catch (error) {
      console.error(error)
    }
  }

 return(
    <div>
      <h2>Check out the Puppy Bowl players or<Link to='/all/add'> Add a new player</Link>!</h2>
      <h3> Or search for a player by name here: </h3>
      <form action= {searchForPlayers}>
      <input type="text" name="searchBar"/>
      <button>Search</button>
      </form>
      
      <div className="playersContainer">
        {
           players.map((player)=>{ 
            return (
              <div key={player.id} className= "player">
                  <Link to={`/all/${player.id}`}>
                  <h3>{player.name}</h3>
                  </Link>
                  <img src ={player.image ? player.image : null} alt={player.name}/>
                  <br/>
                  <button onClick={() => deletePlayer(player.id)}>Delete</button>
               </div>
             )
          })

        }
     </div>
    </div>
 )
}


export default AllPlayers