import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faTable, faBox, faUsers, faMessage, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear the login token
        localStorage.removeItem('login_token');

        Swal.fire({
          title: 'Logged out!',
          text: 'You have been successfully logged out.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/login'); // Redirect to login page
        });
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 p-20 text-white min-vh-100">
            <ul className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start p-5" id="menu">
              <li className='mb-4'>
                <Link to="/moderateur" className="nav-link px-0 align-middle">
                  <FontAwesomeIcon icon={faTachometerAlt} className='fs-4' />
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <hr className='bg-white'/>
              <li className="mb-4">
                <Link to='/moderateur/tables' className="nav-link px-0 align-middle">
                  <FontAwesomeIcon icon={faTable} className='fs-4' />
                  <span className="ms-1 d-none d-sm-inline">Tables</span>
                </Link>
              </li>
              <hr/>
              <li className="mb-4">
                <Link to='/moderateur/messages' className="nav-link px-0 align-middle">
                  <FontAwesomeIcon icon={faMessage} className='fs-4' />
                  <span className="ms-1 d-none d-sm-inline">Messages</span>
                </Link>
              </li>
              <hr/>
              <li className="mb-4">
                <button onClick={handleLogout} className="btn btn-danger px-0 align-middle">
                  <FontAwesomeIcon icon={faSignOutAlt} className='fs-4' />
                  <span className="ms-1 d-none d-sm-inline">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
