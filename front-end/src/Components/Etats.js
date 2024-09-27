import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function Etats() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [Etat, setEtat] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/patients/${id}`);
                if (response && response.data && response.data.product) {
                    const { Etat } = response.data.product;
                    setEtat(Etat);
                    console.log(response.data.product)
                } else {
                    console.log('La réponse ne contient pas les données attendues');
                    console.log(response.data.product)
                }
            } catch (error) {
                console.log(error.response.data.message);
            }
        };
        fetchProduct();
    }, [id]);

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = { state: Etat };  // Correct key name is 'state'

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/patients/${id}`, formData);
            setMessage(response.data.message);
            console.log(response.data.message);
            console.log('Product updated successfully');
            Swal.fire({
                title: 'Success',
                text: 'Etat de santé mis à jour avec succès!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/medecin');
            });
        } catch (error) {
            if (error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.response.data.message);
                Swal.fire({
                    title: 'Erreur',
                    text: 'Une erreur s\'est produite lors de la mise à jour de l\'état de santé!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Edit Form</h3>
                            <hr />
                            <div className="form-wrapper">
                                <form method="POST" onSubmit={updateProduct}>
                                    <div className="mb-3">
                                        <label className="form-label">Etat de santé</label>
                                        <textarea className="form-control" name="etat"
                                            value={Etat}
                                            onChange={(e) => setEtat(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary mb-3">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
