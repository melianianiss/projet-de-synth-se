import React ,{useState,useEffect} from 'react';
import axios from '../axios';

export const Patients=()=>{
    const [Patients, SetPatients] = useState([]);

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/patients')
        .then(res => SetPatients(res.data))
        .catch(err => console.log(err));
    }, []);
  return (
     <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='text-primary'>Liste des Patients</h2>
      </div>
      <table className="table table-striped table-bordered">
        <thead className='table-dark'>
          <tr>
            <th>Nom</th>
            <th>Prénom</th> 
            <th>Cin</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          {Patients && Patients.map(Patient => (
            <tr key={Patient.id}>
         
              <td>{Patient.name}</td>
              <td>{Patient.prenom}</td>
              <td>{Patient.cin}</td>
              <td>{Patient.email}</td>
              <td>{Patient.telephone}</td>
              <td>{Patient.adresse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
