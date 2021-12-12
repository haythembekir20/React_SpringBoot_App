import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const [users, setUser] = useState([]);
  const [search,setSearch]=useState('');
  const [idequsearch,SetIdequsearch]=useState('');
  const [team,setTeam]=useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let r
  let Teams

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9191/Joueurs");
    setUser(result.data.reverse());
  };
 

  const deleteUser = async id => {
    await axios.delete(`http://localhost:9191/deletejoueur/${id}`);
   
    loadUsers();
    history.push("/");
  };

  const loadUsersBySearch = async (nom) => {
   if(nom===""){  
     const result = await axios.get("http://localhost:9191/Joueurs");
     setUser(result.data.reverse());
    }
   else {
    const result = await axios.get(`http://localhost:9191/joueurByName/${nom}`);
    setUser(result.data.reverse());
  
  }
    
  };
  const loadUsersByEquipe = async (idEqu) => {
    console.log(idEqu);
    if(idEqu===""){  
      const result = await axios.get("http://localhost:9191/Joueurs");
      setUser(result.data.reverse());
     }
    else {
     const result = await axios.get(`http://localhost:9191/joueurByEquipe/${idEqu}`);
     setUser(result.data.reverse());
   
   }
     
   };
  useEffect(() => {
    axios.get("http://localhost:9191/equipesunique")
        .then((result) => {
            setTeam(result.data);
            Teams= result.data[0];
            //animalRace = ;
        }).catch(err => console.log(err))
}, [])

useEffect(() => {
    if (team.length > 0) {
        setIsLoaded(true)
       
    }
    console.log(team.length);
}, [team])

  return (
    <div className="container">
      <div className="py-4">
      <h1>Search By Name</h1>
      <div class="input-group">
  <input type="search" class="form-control rounded" 
  placeholder="Search" 
  name="Search" 
  aria-label="Search" 
  aria-describedby="search-addon"
  onChange={event => setSearch(event.target.value)}
  
  />
  <button type="button" class="btn btn-outline-primary" onClick={() => loadUsersBySearch(search)} >Search</button>
</div>
<h1>Search By Equipe </h1>
<select 
          
          onClick={(e)=>{
            
                    Teams = JSON.parse(e.target.value);
                    console.log("Hi");
                    console.log(Teams);
                    
                }} className="custom-select custom-select-lg mb-3" name="idEquSearch" onChange={ex => SetIdequsearch(ex.target.value)} >
                  <option value="" > Search By Equipe</option>
                  
                    {team.map(r=>{
                     
                        return  <option  value={r}  >{r} </option>
                    })}
                    
                </select><button type="button" class="btn btn-outline-primary" onClick={() => loadUsersByEquipe(idequsearch)} >Search Equipe</button>
                
        <h1>Joueur Page</h1>
        <Link className="btn btn-outline-dark" to="/users/add">Add User</Link>
        
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Equipe</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.nom}</td>
                <td>{user.date}</td>
                <td>{user.idEqu}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
