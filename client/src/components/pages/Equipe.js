import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Equipe = () => {
  const [equipe, setEquipe] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9191/equipes");
    setEquipe(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:9191/delete/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Equipe Page</h1>
        <Link className="btn btn-outline-dark" to="/equipe/add">Add Equipe</Link>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipe.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.nom}</td>
                <td>{user.description}</td>
                
                <td>
                  <Link class="btn btn-primary mr-2" to={`/equipes/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/equipe/edit/${user.id}`}
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

export default Equipe;
