import  './App.css';
import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import axios from 'axios';


function App() {
   const [ players , setAllPlayers ] = useState([])
	const [ searchResults, setSearchResults ] = useState ([])
	//const [ singlePlayers, setSinglePlayers ] = useState ([])

   useEffect(() => {
      const fetchPlayers = async () => {
         try {
            const data = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players")
            console.log(data.data.data.players)
				setAllPlayers (data.data.data.players) 
         } catch (error) {
				console.error(error) 
				  
         }
      }
		fetchPlayers()
   }, [])

   return (
      <div>
         <NavBar />
			<h1>Welcome to the Puppy Bowl</h1>
		<Routes>
        <Route path="/all" element ={<AllPlayers players={players} setAllPlayers={setAllPlayers} searchResults={searchResults} setSearchResults={setSearchResults}/>}/>
        <Route path="/all/add" element ={<NewPlayerForm setAllPlayers={setAllPlayers} players={players}/>}/>
        <Route path="/all/:id" element ={<SinglePlayer players = {players}/>}/>
      </Routes>
      </div>
   )
}


export default App