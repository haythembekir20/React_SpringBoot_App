import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    i:id,
    nom: "",
    date: "",
    idEqu: "" 
  });

  const { i,nom, date, idEqu } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    console.log(user);
    console.log("test");
    await axios.put("http://localhost:9191/updatejoueur", user);
    console.log(user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9191/joueurById/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Joueur</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your idEqu"
              name="nom"
              value={nom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Date"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your idEqu"
              name="idEqu"
              value={idEqu}
              onChange={e => onInputChange(e)}
            />
          </div>
        
          <button className="btn btn-warning btn-block">Update Joueur</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
