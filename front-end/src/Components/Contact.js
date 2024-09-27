import React, { useState } from "react";
import Footer from "./Footer";
import axios from 'axios';

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/message', {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone,
        message: comments
      });
      // Reset form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setComments("");
      setErrors({});
      alert('Message envoyé avec succès!');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Erreur lors de l\'envoi du message:', error);
        alert('Échec de l\'envoi du message. Veuillez réessayer plus tard.');
      }
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "50px", maxWidth: "1200px", margin: "auto", marginBottom: "150px" }}>
        <div style={{ backgroundColor: "#f8f9fa", padding: "60px", boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)", marginBottom: "20px", marginTop: "200px", flex: "2", marginRight: "20px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contactez-nous</h2>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Prénom</label>
            <input type="text" className="form-control" id="firstName" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {errors.firstname && <div className="text-danger">{errors.firstname}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Nom</label>
            <input type="text" className="form-control" id="lastName" placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {errors.lastname && <div className="text-danger">{errors.lastname}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse Email</label>
            <input type="email" className="form-control" id="email" placeholder="nom@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Numéro de Téléphone</label>
            <input type="text" className="form-control" id="phoneNumber" placeholder="+212" value={phone} onChange={(e) => setPhone(e.target.value)} />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="comments" className="form-label">Commentaires/Questions</label>
            <textarea className="form-control" id="comments" rows="3" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
            {errors.message && <div className="text-danger">{errors.message}</div>}
          </div>
          <button className="btn btn-success" onClick={handleSubmit} style={{ backgroundColor: "#334389", borderColor: "#334389", color: "#fff", fontWeight: "bold", width: "100%" }}>Envoyer</button>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000876661!2d-7.669393223679275!3d33.572403231399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1708258598437!5m2!1sen!2sma" width="100%" height="450" style={{ flex: "1.5", marginTop: "320px" }} allowFullScreen="" loading="lazy" title="Map" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </>
  );
};
