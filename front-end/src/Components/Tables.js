import React from 'react';
import { Link } from 'react-router-dom';

export const Tables = () => {
  return (
    <div className="container mt-5">

      <div className="d-grid gap-3">
        <Link to="medecins" className="btn btn-primary">Médecins Table</Link>
        <Link to="receptionnistes" className="btn btn-secondary">Réceptionnistes Table</Link>
        <Link to="moderateurs" className="btn btn-success">Modérateurs Table</Link>
        <Link to="patients" className="btn btn-info">Patients Table</Link>
        <Link to="departements" className="btn btn-warning">departements Table</Link>
      </div>
    </div>
  );
};
