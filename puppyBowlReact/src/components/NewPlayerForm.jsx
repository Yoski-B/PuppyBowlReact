import axios from "axios"
import {Link} from "react-router-dom"
import AllPlayers from "./AllPlayers"
import NavBar from "./NavBar";


const NewPlayerForm = ({setAllPlayers, players}) =>{

  const addPlayer = async (FormData) => {
  try {
    const newPlayer = {
          name: FormData.get("name"),
          breed: FormData.get ("breed"),
          status: FormData.get("status"),
          imageURL: FormData.get ("image"),
    }
    const {data} = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players", newPlayer)
    console.log(data)
    setAllPlayers([...players,data])
  } catch (error) {
    console.error(error)
  }
}
  
  return(
    <div>
      
      <form action={addPlayer}>
        <h2>Add New Players</h2>
          <label>Name:
            <input name="name" type="text" required/>
          </label>
          <br/>
          <label>Breed:
            <input name="breed" type="text" required/>
          </label>
          <br/>
          <label>Status:
            <input name="status" type="text" required/>
          </label>
          <br/>
          <label>Image:
            <input name="image" type="text" required/>
          </label>
          <br/>
      <button type="submit">Submit</button>
     </form>
     <Link to='/all'>Back to All Puppy Players</Link>
    </div>
  )
 }
 
 export default NewPlayerForm