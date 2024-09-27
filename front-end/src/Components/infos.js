import React from "react";
import style from "./infos.module.css";
import Footer from "./Footer";

const Infos = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ marginTop: "200px" }} className={style.body}>
        <h1
          style={{
            paddingLeft: "200px",
            color: "rgb(56 192 60)",
            fontFamily: "verdana",
            fontWeight: "bold",
          }}
        >
          À Propos de Notre Hôpital
        </h1>
        <div style={{ display: "flex", margin: "60px" }}>
          <p
            style={{
              padding: "200px",
              fontWeight: "bold",
              fontSize: "30px",
              color: "#334389",
            }}
          >
            Bienvenue à MELKAT, où nous nous engageons à fournir des services de
            santé de haute qualité à notre communauté. Depuis 2023, nous nous
            sommes engagés à offrir des soins compatissants et d'excellents
            résultats médicaux à nos patients.
          </p>
          <img src="./images/hospital.jpg" width="500px" height="200px" />
        </div>
        <div
          style={{
            backgroundColor: "#334389",
            padding: "100px",
            height: "400px",
          }}
        >
          <center>
            <h2
              style={{
                color: "rgb(56 192 60)",
                fontFamily: "verdana",
                fontWeight: "bold",
              }}
            >
              Nos Services
            </h2>
          </center>
          <ul
            style={{
              fontWeight: "bold",
              color: "white",
              display: "flex",
              gap: "120px",
              paddingTop: "42px",
            }}
          >
            <li style={{ marginBottom: "20px", fontSize: "26px" }}>
              Cardiologie
            </li>
            <li style={{ marginBottom: "20px", fontSize: "26px" }}>
              Orthopédie
            </li>
            <li style={{ marginBottom: "20px", fontSize: "26px" }}>
              Oncologie
            </li>
            <li style={{ marginBottom: "20px", fontSize: "26px" }}>
              Neurologie
            </li>
            <li style={{ marginBottom: "20px", fontSize: "26px" }}>
              Chirurgie Générale
            </li>
            <li style={{ marginBottom: "20px", fontSize: "26px" }}>
              Soins Maternels
            </li>
          </ul>
        </div>

        <div style={{ backgroundColor:" #f5f5f5 "}}>
          <h2
            style={{
              color: "rgb(56 192 60)",
              fontFamily: "verdana",
              fontWeight: "bold",
              paddingLeft: "120px",
              paddingTop: "170px",
              marginBottom: "-70px",
            }}
          >
            Nos Installations
          </h2>
          <p
            style={{
              padding: "190px",
              fontWeight: "bold",
              fontSize: "30px",
              color: "#334389",
            }}
          >
            Notre hôpital est équipé de technologies médicales de pointe et
            d'aménagements confortables pour garantir la meilleure expérience
            possible à nos patients. Des outils de diagnostic avancés aux
            chambres spacieuses pour les patients, nous nous efforçons de créer
            un environnement de guérison pour tous ceux qui franchissent nos
            portes.
          </p>
        </div>
        <h2 style={{
              color: "rgb(56 192 60)",
              fontFamily: "verdana",
              fontWeight: "bold",
              padding:"50px"
            }}>Rencontrez Notre Équipe:</h2>
       <div  style={{
            padding: "100px",
            fontWeight: "bold",
            fontSize: "30px",
            color: "#334389",
            height: "90vh",  
            display:'flex',
            justifyContent:'center'
          }}>
       
        <p style={{width:'35%',lineHeight:"60px"}}>
          À MELKAT, nous avons une équipe de professionnels de
          la santé hautement qualifiés et compatissants dédiés à fournir des
          soins personnalisés à chaque patient. Des médecins certifiés aux
          infirmières expérimentées en passant par le personnel de soutien, nous
          sommes là pour vous soutenir dans votre parcours vers la santé et le
          bien-être.
        </p> 
       </div>
        {/* <h2>Emplacement et Contact</h2>
        <p>
          <strong>Adresse :</strong> 
          <br />
          <strong>Téléphone :</strong> 
          <br />
          <strong>Email :</strong> 
          <br />
          <strong>Horaires :</strong> 
          <br />
        </p> */}
      </div>
      <Footer />
    </>
  );
};

export { Infos };
