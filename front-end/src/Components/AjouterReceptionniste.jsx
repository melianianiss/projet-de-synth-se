import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const AjouterReceptionniste = () => {
  const { setUser } = useAuth();
  const [nomError, setNomError] = React.useState("");
  const [prenomError, setPrenomError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [telephoneError, setTelephoneError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [roleError, setRoleError] = React.useState("");
  const [inputData, setInputData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    role: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.post(
        "http://127.0.0.1:8000/api/register",
        inputData
      );
      if (resp.status === 200) {
        setUser(resp.data.user);
      }
      navigate("/moderateur/tables/receptionnistes");
    } catch (error) {
      if (error.response.status === 422) {
        const { errors } = error.response.data;
        if (errors.nom) setNomError(errors.nom[0]);
        else setNomError("");
        if (errors.prenom) setPrenomError(errors.prenom[0]);
        else setPrenomError("");
        if (errors.email) setEmailError(errors.email[0]);
        else setEmailError("");
        if (errors.password) setPasswordError(errors.password[0]);
        else setPasswordError("");
        if (errors.telephone) setTelephoneError(errors.telephone[0]);
        else setTelephoneError("");
        if (errors.role) setRoleError(errors.role[0]);
        else setRoleError("");
    
      }}}

  return (
    <div className="d-flex w-100 vh-100 align-items-center justify-content-center">
      <div className="w-50 p-5 bg-white rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom" style={{ color: "black" }}>
              Nom :
            </label>
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
            <label htmlFor="Prenom" style={{ color: "black" }}>
              Prenom :
            </label>
            <input
              type="text"
              id="Prenom"
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
            <label htmlFor="email" style={{ color: "black" }}>
              Email :
            </label>
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
          <div>
            <label htmlFor="telephone" style={{ color: "black" }}>
              Telephone :
            </label>
            <input
              type="text"
              id="telephone"
              className="form-control"
              value={inputData.telephone}
              onChange={(e) =>
                setInputData({ ...inputData, telephone: e.target.value })
              }
            />
            {telephoneError && (
              <p className="text-sm text-red-600">{telephoneError}</p>
            )}
          </div>
          <div>
            <label htmlFor="role" style={{ color: "black" }}>
              Role :
            </label>
            <input
              type="text"
              id="role"
              className="form-control"
              value={inputData.role}
              onChange={(e) =>
                setInputData({ ...inputData, role: e.target.value })
              }
            />
            {roleError && <p className="text-sm text-red-600">{roleError}</p>}
          </div>
          
          <div>
            <label htmlFor="password" style={{ color: "black" }}>
              Password :
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
            {passwordError && (
              <p className="text-sm text-red-600">{passwordError}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" style={{ color: "black" }}>
              Confirme Password :
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={inputData.password_confirmation}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  password_confirmation: e.target.value,
                })
              }
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};
  
