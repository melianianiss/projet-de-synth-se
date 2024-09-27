import { faAdd, faPen, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'; // Importation de l'icône faEye
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const DepartementsTable = () => {
  const [departements, setDepartements] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/departements')
      .then(res => setDepartements(res.data.departements))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce departement ?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/departements/${id}`);
        setDepartements(departements.filter(departement => departement.id !== id)); 
        console.log('departement supprimé avec succès');
      } catch (error) {
        console.log('Une erreur s\'est produite lors de la suppression du departement');
      }
    }
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='text-primary'>Liste des départements</h2>
      </div>
      <Link to='/moderateur/ajouter/departement' className='btn btn-success my-3'>Ajouter <FontAwesomeIcon icon={faAdd} /></Link>
      <table className="table table-striped table-bordered">
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Nom de département</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departements &&  departements.map(departement => (
            <tr key={departement.id}>
              <td>{departement.id}</td>
              <td>{departement.name }</td>

              <td>
                <button className='btn btn-sm text-decoration btn-danger m-2' onClick={() => handleDelete(departement.id)}>Supprimer <FontAwesomeIcon icon={faTrash} /> </button>
                <Link className='btn btn-sm text-decoration btn-warning m-2 text-white' to={`/moderateur/modifier/departement/${departement.id}`}>Modifier <FontAwesomeIcon icon={faPen} /></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
