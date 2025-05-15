

import { Link, Route, Routes, useLocation } from "react-router-dom"
import AllPlayers from "./AllPlayers"
import NewPlayerForm from "./NewPlayerForm"
import SinglePlayer from "./SinglePlayer"


const NavBar = () =>{

  const location = useLocation()
  const {pathname} = location

  return(
     <div>
       <nav>
          <Link to="/all" className={pathname === "/" ? "selected" : ""}>All Players</Link>
          <Link to='/all/add' className={pathname === "/add" ? "selected" : ""}>Add New Player</Link>
          <Link to="/all/single" className={pathname === "/single" ? "selected" : ""}>Single Player</Link>
       </nav>
     </div>
  )
 }
 
 export default NavBar