import axios from "axios";
import { useNavigate } from "react-router-dom";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Footer from "./Footer";

export default function Recrutement() {
    const navigate = useNavigate();
    const [pdfFile, setPDFFile] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);
    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [cv, setcv] = useState("");
    const [cin, setcin] = useState("");

    const createProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('cin', cin);
        formData.append('nom', nom);
        formData.append('prenom', prenom);
        formData.append('email', email);
        formData.append('telephone', tel);
        formData.append('cv', cv);

        console.log(formData);
        await axios.post('http://127.0.0.1:8000/api/Condidats', formData)
            .then(({ data }) => {
                console.log(data.message);
                navigate('/');
            }).catch(({ response }) => {
                if (response.status === 422) {
                    console.log(response.data.errors);
                } else {
                    console.log(response.data.message);
                }
            });
    };

    useEffect(() => {
        document.title = "App hospital-Recrutement";
    }, []);

    const fileType = ["application/pdf"];

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onload = (e) => {
                    setPDFFile(e.target.result);
                };
            } else {
                setPDFFile(null);
            }
        } else {
            console.log("Please select a PDF");
        }
    };

    const changehandler = (e) => {
        setcv(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        } else {
            setViewPdf(null);
        }
    };

    const newPlugin = defaultLayoutPlugin();

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />

            <div className="container-fluid" style={{ backgroundColor: "#f8f9fa", padding: "200px 0", position: "relative" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1 className="text-center" style={{ color: 'rgb(51, 67, 137)', fontFamily: "Lilita One", fontWeight: '400px', fontStyle: 'normal' }}>REJOIGNEZ DE NOTRE ÉQUIPE!</h1>
                            <form onSubmit={createProduct} style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
                                <div className="mb-3">
                                    <label htmlFor="cin" className="form-label">CIN</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cin"
                                        placeholder="cin"
                                        onChange={(e) => setcin(e.target.value)}
                                    />
                                    <label htmlFor="prenom" className="form-label">Prénom</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="prenom"
                                        placeholder="Prénom"
                                        onChange={(e) => setprenom(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label">Nom </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nom"
                                        placeholder="Nom de famille"
                                        onChange={(e) => setnom(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Adresse Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tel" className="form-label">Numéro de téléphone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="tel"
                                        placeholder="+212 "
                                        onChange={(e) => setTel(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cv" className="form-label">CV</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="cv"
                                        onChange={(e) => {
                                            handleChange(e);
                                            changehandler(e);
                                        }}
                                    />
                                </div>
                                <div className="text-center mt-3">
                                    <button type="submit" className="btn btn-primary mb-3" style={{ backgroundColor: 'rgb(51, 67, 137)', width: "100%" }}>Enregistrer</button>
                                </div>
                            </form>
                            <div className="pdf-container mt-3">
                                <h3>View PDF</h3>
                                <div className="pdf-viewer">
                                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                        {viewPdf ? (
                                            <Viewer fileUrl={viewPdf} plugins={[newPlugin]} />
                                        ) : (
                                            <div>No PDF</div>
                                        )}
                                    </Worker>
                                </div>
                            </div>
                            <button onClick={handleSubmit} className="btn btn-success mt-3" style={{ width: "100%" }}>
                                View PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
