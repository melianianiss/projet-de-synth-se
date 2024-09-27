import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Acceuil } from "./Components/Accueil";
import { Contact } from "./Components/Contact";
import Recrutement from "./Components/Recrutement";
import { Infos } from "./Components/infos";
import { AdminDashboard } from "./Components/AdminDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./Components/LoginForm";
import { Tables } from "./Components/Tables";
import { AjouterMedecin } from "./Components/AjouterMedecin";
import { ModifierMedecin } from "./Components/ModifierMedecin";
import { ShowMedecin } from "./Components/ShowMedecin";
import { MedecinsTable } from "./Components/MedecinsTable";
import { ReceptionnistesTable } from "./Components/Receptionniste";
import { AjouterReceptionniste } from "./Components/AjouterReceptionniste";
import { ModifierReceptionniste } from "./Components/ModifierReceptionniste";
import { ShowReceptionniste } from "./Components/ShowReceptionniste";
import { ModerateursTable } from "./Components/ModerateursTable";
import { AjouterModerateur } from "./Components/AjouterModerateur";
import { ModifierModerateur } from "./Components/ModifierModerateur";
import { DepartementsTable } from "./Components/departementsTable";
import { AjouterDepartement } from "./Components/AjouterDepartement";
import { ModifierDepartement } from "./Components/ModifierDepartement";
import { AppointmentForm } from "./Components/Appointment";
import { MedecinDashboard } from "./Components/MedecinDashboard";
import { Messages } from "./Components/Messages";
import { Patients } from "./Components/Patients";
import Etats from "./Components/Etats";

import Afficher from "./Components/Afficher";

import Condidattable from "./Components/Condidattable";
import { RhDashboard } from "./Components/RhDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<Acceuil />} />
          <Route path="Recrutement" element={<Recrutement />} />
          <Route path="infos" element={<Infos />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={<AppointmentForm />} />
        </Route>

        <Route path="medecin" element={<MedecinDashboard />}>
          <Route path="" element={<Afficher />} />
          <Route path="état/edit/:id" element={<Etats />} />
        </Route>

        <Route path="/Rh" element={<RhDashboard />}>
          <Route path="condidat" element={<Condidattable />} />
        </Route>

       
        <Route path='moderateur' element={<AdminDashboard />}>
        
          <Route path='dashboard' element={<h1>dashboard</h1>} />
          <Route path='tables' element={<Tables />} />
          <Route path='tables/receptionnistes' element={<ReceptionnistesTable/>} />
          <Route path='ajouter/receptionniste' element={<AjouterReceptionniste/>} />
          <Route path='modifier/réceptionniste/:id' element={<ModifierReceptionniste />} />
          <Route path="show/réceptionniste/:id" element={<ShowReceptionniste/>} /> 

          <Route path='tables/moderateurs' element={<ModerateursTable/>} />
          <Route path='ajouter/moderateur' element={<AjouterModerateur/>} />
          <Route path='modifier/moderateur/:id' element={<ModifierModerateur />} />
          <Route path="show/réceptionniste/:id" element={<ShowReceptionniste/>} /> 

          <Route path='tables/patients' element={<Patients/>} /> 
          <Route path='tables/medecins' element={<MedecinsTable/>} />
          <Route path='ajouter/medecin' element={<AjouterMedecin />} />
          <Route path='modifier/medecin/:id' element={<ModifierMedecin />} />
          <Route path="show/medecin/:id" element={<ShowMedecin/>} /> 

          <Route path='tables/departements' element={<DepartementsTable/>} /> 
         < Route path='ajouter/departement' element={<AjouterDepartement/>} />
         <Route path='modifier/departement/:id' element={<ModifierDepartement />} />
         <Route path="messages" element={<Messages/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
