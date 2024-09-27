import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const ModifierModerateur = () => {
  const { setUser } = useAuth();
  const [nomError, setNomError] = React.useState("");
  const [prenomError, setPrenomError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");


  const navigate = useNavigate();
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/moderateurs/show/${id}`)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.put(
        `http://127.0.0.1:8000/api/moderateurs/${id}`,
        inputData
      );
      if (resp.status === 200) {
        setUser(resp.data.user);
      }
      navigate("/moderateur/tables/moderateurs");
    } catch (error) {
      if (error.response.status === 422) {
        const { errors } = error.response.data;
        if (errors.nom) setNomError(errors.nom[0]);
        else setNomError("");
        if (errors.prenom) setPrenomError(errors.prenom[0]);
        else setPrenomError("");
        if (errors.email) setEmailError(errors.email[0]);
        else setEmailError("");

      }
    }
  };

  return (
    <div className="d-flex w-100 vh-100 align-items-center justify-content-center">
      <div className="w-50 p-5 bg-white text-black rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID :</label>
            <input
              type="text"
              id="id"
              className="form-control"
              value={inputData.id}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              className="form-control"
              value={inputData.nom}
              onChange={(e) =>
                setInputData({ ...inputData, nom: e.target.value })
              }
            />
            {nomError && <p className="text-sm text-red-600">{nomError}</p>}
          </div>
          <div>
            <label htmlFor="prenom">Prenom :</label>
            <input
              type="text"
              id="prenom"
              className="form-control"
              value={inputData.prenom}
              onChange={(e) =>
                setInputData({ ...inputData, prenom: e.target.value })
              }
            />
            {prenomError && (
              <p className="text-sm text-red-600">{prenomError}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
            {emailError && <p className="text-sm text-red-600">{emailError}</p>}
          </div>
      
          
          <br />
          <button className="btn btn-info">Modifier</button>
        </form>
      </div>
    </div>
  );
};
