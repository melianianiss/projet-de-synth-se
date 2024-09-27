import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const MedecinDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the token from local storage or wherever it's stored
        localStorage.removeItem('token');
        // Redirect to the login page or any other appropriate page
        navigate('/login');
        Swal.fire(
          'Logged out!',
          'You have been logged out.',
          'success'
        );
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col py-3">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
