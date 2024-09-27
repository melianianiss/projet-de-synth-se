import { faAdd, faPen, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'; // Importation de l'icône faEye
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const MedecinsTable = () => {
  const [medecins, setMedecins] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/medcins')
      .then(res =>{ 
        setMedecins(res.data.medcins)
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce médecin ?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/medcins/${id}`);
        setMedecins(medecins.filter(medecin => medecin.id !== id)); 
        console.log('Médecin supprimé avec succès');
      } catch (error) {
        console.log('Une erreur s\'est produite lors de la suppression du médecin');
      }
    }
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='text-primary'>Liste des médecins</h2>
      </div>
      <Link to='/moderateur/ajouter/medecin' className='btn btn-success my-3'>Ajouter <FontAwesomeIcon icon={faAdd} /></Link>
      <table className="table table-striped table-bordered">
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th> 
            <th>Téléphone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {medecins && medecins.map(medecin => (
            <tr key={medecin.id}>
              <td>{medecin.id}</td>
              <td>{medecin.nom}</td>
              <td>{medecin.prenom}</td>
              <td>{medecin.telephone}</td>
              <td>{medecin.email}</td>
              <td>
                <button className='btn btn-sm text-decoration btn-danger m-2' onClick={() => handleDelete(medecin.id)}>Supprimer <FontAwesomeIcon icon={faTrash} /> </button>
                <Link className='btn btn-sm text-decoration btn-warning m-2 text-white' to={`/moderateur/modifier/medecin/${medecin.id}`}>Modifier <FontAwesomeIcon icon={faPen} /></Link>
                <Link className='btn btn-sm text-decoration btn-info text-white m-2' to={`/moderateur/show/medecin/${medecin.id}`}>Voir <FontAwesomeIcon icon={faEye} /></Link> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
