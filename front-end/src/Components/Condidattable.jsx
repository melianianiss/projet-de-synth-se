import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Condidattable() {
    const [Condidats, setCondidats] = useState([]);

    useEffect(() => {
        const fetchCondidats = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/Condidats');
                if (response.data && Array.isArray(response.data.condidats)) {
                    setCondidats(response.data.condidats);
                } else {
                    console.error('Data not found or invalid format in response:', response.data);
                }
            } catch (error) {
                console.error('Error fetching condidats:', error);
            }
        };

        fetchCondidats();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce Condidat ?');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/api/Condidats/${id}`);
                if (response.status === 200 || response.status === 204) {
                    setCondidats(Condidats.filter(Condidat => Condidat.id !== id));
                    console.log('Condidat supprimé avec succès');
                } else {
                    console.error('Failed to delete condidat. Response:', response);
                }
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la suppression du Condidat', error);
                alert('Une erreur s\'est produite lors de la suppression du Condidat. Veuillez réessayer plus tard.');
            }
        }
    };

    const handleViewCv = async (cvPath) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/Condidats/cv/${cvPath}`, {
                responseType: 'blob',
            });
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(blob);
            window.open(pdfUrl, '_blank');
        } catch (error) {
            console.error('Error opening CV:', error);
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">CIN</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {Condidats.map(Condidat => (
                    <tr key={Condidat.id}>
                        <td>{Condidat.cin}</td>
                        <td>{Condidat.nom}</td>
                        <td>{Condidat.prenom}</td>
                        <td>{Condidat.email}</td>
                        <td>{Condidat.telephone}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(Condidat.id)}>Delete</button>
                            {Condidat.cv && (
                                <button className="btn btn-primary ms-2" onClick={() => handleViewCv(Condidat.cv)}>Afficher</button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
