
import React,{useState,useEffect } from 'react';
import axios from "axios";

//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faTable, faLayerGroup, faBox, faUsers} from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
export const RhDashboard = () => {

    


  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 p-20 text-white min-vh-100">
    
            <ul className="nav nav-pills flex-column  mb-0 align-items-center align-items-sm-start p-5 " id="menu">
      
              <li className='mb-4'>
                 <Link to={"/patient"}  className="nav-link px-0 align-middle"> <FontAwesomeIcon icon={faTachometerAlt} className='fs-4' /> <span className="ms-1 d-none d-sm-inline">Dashboard</span></Link>
              </li>
              <hr className='bg-white'/>
              <li className="mb-4">
                <Link to={'/moderateur/tables'}  className="nav-link px-0 align-middle"> <FontAwesomeIcon icon={faTable} className='fs-4' /> <span className="ms-1 d-none d-sm-inline">Tables</span></Link>
                
              </li >
              <hr/>
              <li className="mb-4">
                <Link className="nav-link px-0 align-middle"><FontAwesomeIcon icon={faLayerGroup} className='fs-4' /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></Link>   
              </li>
              <hr/>
              <li className="mb-4">
                <Link className="nav-link px-0 align-middle" ><FontAwesomeIcon icon={faBox} className='fs-4' /> <span className="ms-1 d-none d-sm-inline">Products</span> </Link>
                  
              </li>
              <hr/>
              <li className="mb-4">
                <Link className="nav-link px-0 align-middle"> <FontAwesomeIcon icon={faUsers} className='fs-4'/> <span className="ms-1 d-none d-sm-inline">Customers</span> </Link>
                 
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
