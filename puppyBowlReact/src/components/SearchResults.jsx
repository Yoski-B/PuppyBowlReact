
import AllPlayers from "./AllPlayers"

const searchForPlayers = (formData, setSearchResults)=>{
  const target = formData.get("searchBar").toLowerCase()
  const result = AllPlayers.filter((player) =>{
        return player.name.toLowerCase().includes(target)

  })
  console.log(result)
  setSearchResults(result)
 }
  
export default searchForPlayers