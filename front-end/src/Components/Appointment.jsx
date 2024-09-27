import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

const stripePromise = loadStripe('pk_test_51PCKEWJEBHdgsTP9j4EAXEaCUchDjyuQlydlOjGk39a8qkE0KNV8FDyTHdg9xcObtR7XK2cIxjGv5BvXdMrQOnTh00JrbsT8U7');

export const AppointmentForm = () => {
  const [inputData, setInputData] = useState({
    name: '',
    prenom: '',
    cin: '',
    email: '',
    telephone: '',
    adresse: '',
    departement: '',
    médecin: '',
    date: ''
  });
  const [departments, setDepartments] = useState([]);
  const [médecins, setmédecins] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/departements')
      .then(response => {
        setDepartments(response.data.departements || []);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des départements:', error);
      });
  }, []);

  useEffect(() => {
    if (inputData.departement) {
      axios.get(`http://127.0.0.1:8000/api/medcins/search/${inputData.departement}`)
        .then(response => {
          setmédecins(response.data.medcins || []);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des médecins:', error);
        })
    } else {
      setmédecins([]);
    }
  }, [inputData.departement]);

  const handleCombinedSubmit = async (e) => {
    e.preventDefault();

    // Frontend date validation
    const selectedDate = dayjs(inputData.date);
    if (selectedDate.isBefore(dayjs(), 'day')) {
      Swal.fire('Erreur', 'Veuillez sélectionner une date future.', 'error');
      return;
    }

    try {
      // Envoi des données du patient au backend
      const patientResponse = await axios.post('http://127.0.0.1:8000/api/patients', inputData);
      const patientId = patientResponse.data.patient_id;

      // Après avoir créé avec succès la réservation, procédez au paiement
      const paymentResponse = await axios.post('http://localhost:8000/api/payment/create', {
        name: "Service",
        price: 30,
        description: "Payment for the service",
        metadata: {
          ...inputData  // Inclure toutes les données nécessaires du patient et de la réservation
        }
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { id } = paymentResponse.data;

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: id,
      });

      if (result.error) {
        Swal.fire('Erreur', result.error.message, 'error');
      }

      // Réinitialiser le formulaire après le paiement
      setInputData({
        name: '',
        prenom: '',
        cin: '',
        email: '',
        telephone: '',
        adresse: '',
        departement: '',
        médecin: '',
        date: ''
      });

    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        Swal.fire('Erreur', error.response.data.error, 'error');
      } else {
        console.error('Erreur lors de la création de la réservation ou du paiement :', error);
        Swal.fire('Erreur', 'Une erreur est survenue. Veuillez réessayer plus tard.', 'error');
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <form onSubmit={handleCombinedSubmit} className="p-4 shadow rounded" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '50%' }}>
            <div className="form-group">
              <label htmlFor="name">Nom:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={inputData.name}
                onChange={(e) => setInputData(inputData => ({ ...inputData, name: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom:</label>
              <input
                type="text"
                id="prenom"
                className="form-control"
                value={inputData.prenom}
                onChange={(e) => setInputData({ ...inputData, prenom: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cin">CIN:</label>
              <input
                type="text"
                id="cin"
                className="form-control"
                value={inputData.cin}
                onChange={(e) => setInputData({ ...inputData, cin: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                className="form-control"
                value={inputData.email}
                onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Téléphone:</label>
              <input
                type="text"
                id="telephone"
                className="form-control"
                value={inputData.telephone}
                onChange={(e) => setInputData({ ...inputData, telephone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="adresse">Adresse:</label>
              <input
                type="text"
                id="adresse"
                className="form-control"
                value={inputData.adresse}
                onChange={(e) => setInputData({ ...inputData, adresse: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="departement">Département:</label>
              <select
                id="departement"
                className="form-control"
                value={inputData.departement}
                onChange={(e) => setInputData({ ...inputData, departement: e.target.value })}
              >
                <option value="">Sélectionner un département</option>
                {departments.map(department => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="médecin">Médecin:</label>
              <select
                id="médecin"
                className="form-control"
                value={inputData.médecin}
                onChange={(e) => setInputData({ ...inputData, médecin: e.target.value })}
              >
                <option value="">Sélectionner un médecin</option>
                {médecins.length > 0 ? médecins.map(médecin => (
                  <option key={médecin.id} value={médecin.id}>
                    {médecin.nom} {médecin.prenom}
                  </option>
                )) : <option value="" disabled>Aucun médecin disponible</option>}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                className="form-control"
                value={inputData.date}
                onChange={(e) => setInputData({ ...inputData, date: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-primary">Pay</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
