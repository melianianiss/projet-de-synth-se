import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const ModifierDepartement = () => {
  const { setUser } = useAuth();
  const [nomError, setNomError] = React.useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    name: "",
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/departements/show/${id}`)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.put(
        `http://127.0.0.1:8000/api/departements/${id}`,
        inputData
      );
      if (resp.status === 200) {
        setUser(resp.data.user);
      }
      navigate("/moderateur/tables/departements");
    } catch (error) {
      if (error.response.status === 422) {
        const { errors } = error.response.data;
        if (errors.nom) setNomError(errors.nom[0]);
        else setNomError("");
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
            <label htmlFor="nom">Nom de département :</label>
            <input
              type="text"
              id="nom"
              className="form-control"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
            {nomError && <p className="text-sm text-red-600">{nomError}</p>}
          </div>
          <br />
          <button className="btn btn-info">Modifier</button>
        </form>
      </div>
    </div>
  );
};
