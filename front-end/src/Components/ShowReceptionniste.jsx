import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ShowReceptionniste = () => {
  const [receptionniste, setReceptionniste] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/receptionnistes/show/${id}`)
      .then((res) => setReceptionniste(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container my-5 ">

        <h2 className="text-center mb-4 " style={{color:"blue",fontWeight:"bold"}}>Receptionniste Details</h2>
        {receptionniste && (
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{receptionniste.id}</td>
              </tr>
              <tr>
                <th>Nom</th>
                <td>{receptionniste.nom}</td>
              </tr>
              <tr>
                <th>Prénom</th>
                <td>{receptionniste.prenom}</td>
              </tr>
              <tr>
                <th>Téléphone</th>
                <td>{receptionniste.telephone}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{receptionniste.email}</td>
              </tr>
            
            </tbody>
          </table>
        )}
   
    </div>
  );
};

