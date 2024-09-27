import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Afficher() {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/patients');
            setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce médecin ?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/patients/${id}`);
                setPatients(patients.filter(patient => patient.id !== id));
                console.log('Médecin supprimé avec succès');
            } catch (error) {
                console.log('Une erreur s\'est produite lors de la suppression du médecin');
            }
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.prenom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>Liste De Patients</h1>
            <input
                type="text"
                placeholder="Rechercher par nom ou prénom"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control mb-3 w-50"
            />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">CIN</th>
                        <th scope="col">Email</th>
                        <th scope="col">Téléphone</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">État De Santé</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.prenom}</td>
                            <td>{patient.cin}</td>
                            <td>{patient.email}</td>
                            <td>{patient.telephone}</td>
                            <td>{patient.adresse}</td>
                            <td>{patient.state}</td>
                            <td>
                                <Link className="btn btn-success me-2" to={`/medecin/état/edit/${patient.id}`}>Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(patient.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
