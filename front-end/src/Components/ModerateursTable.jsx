import { faAdd, faPen, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'; // Importation de l'icône faEye
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ModerateursTable = () => {
  const [moderateurs, setModerateurs] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/moderateurs')
      .then(res => setModerateurs(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce médecin ?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/moderateurs/${id}`);
        setModerateurs(moderateurs.filter(moderateur => moderateur.id !== id)); 
        console.log('moderateur supprimé avec succès');
      } catch (error) {
        console.log('Une erreur s\'est produite lors de la suppression du moderateur');
      }
    }
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='text-primary'>Liste des moderateurs</h2>
      </div>
      <Link to='/moderateur/ajouter/moderateur' className='btn btn-success my-3'>Ajouter <FontAwesomeIcon icon={faAdd} /></Link>
      <table className="table table-striped table-bordered">
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th> 
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {moderateurs && moderateurs.map(moderateur => (
            <tr key={moderateur.id}>
              <td>{moderateur.id}</td>
              <td>{moderateur.nom}</td>
              <td>{moderateur.prenom}</td>
              <td>{moderateur.email}</td>
              <td>
                <button className='btn btn-sm text-decoration btn-danger m-2' onClick={() => handleDelete(moderateur.id)}>Supprimer <FontAwesomeIcon icon={faTrash} /> </button>
                <Link className='btn btn-sm text-decoration btn-warning m-2 text-white' to={`/moderateur/modifier/moderateur/${moderateur.id}`}>Modifier <FontAwesomeIcon icon={faPen} /></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}