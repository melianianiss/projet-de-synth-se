import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ShowMedecin = () => {
  const [medecin, setMedecin] = useState(null);
  const [departmentName, setDepartmentName] = useState('');
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/medcins/show/${id}`)
      .then((res) => {
        setMedecin(res.data);
        // Fetch department details based on departement_id
        axios.get(`http://127.0.0.1:8000/api/departements/${res.data.departement_id}`)
          .then(response => {
            setDepartmentName(response.data.name);
          })
          .catch(error => {
            console.error('Error fetching department:', error);
          });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "blue", fontWeight: "bold" }}>Doctor Details</h2>
      {medecin && (
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{medecin.id}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{medecin.nom}</td>
            </tr>
            <tr>
              <th>Prénom</th>
              <td>{medecin.prenom}</td>
            </tr>
            <tr>
              <th>Téléphone</th>
              <td>{medecin.telephone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{medecin.email}</td>
            </tr>
            <tr>
              <th>Specialité</th>
              <td>{medecin.specialité}</td>
            </tr>
            <tr>
              <th>Departement id</th>
              <td>{medecin.departement_id}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
