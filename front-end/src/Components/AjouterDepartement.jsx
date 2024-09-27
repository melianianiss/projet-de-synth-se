import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const AjouterDepartement = () => {
  const { setUser } = useAuth();
  const [nomError, setNomError] = React.useState("");
  const [inputData, setInputData] = useState({
    nameh: "",
  });

  const [departements, setDepartements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/departements");
      setDepartements(response.data.departements);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.post(
        "http://127.0.0.1:8000/api/add/departements",
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
      <div className="w-50 p-5 bg-white rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom" style={{ color: "black" }}>
              Nom de département:
            </label>
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
         
          <button type="submit" className="btn btn-info mt-3">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};
