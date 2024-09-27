import Carousel from 'react-bootstrap/Carousel';
import style from './imageSlider.module.css';
import CountUp from 'react-countup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor,faUserNurse,faBed } from '@fortawesome/free-solid-svg-icons'
import ScrollTrigger, { ScrollTriggerProps } from 'react-scroll-trigger';
import { useState } from 'react';
import Footer from './Footer';


function DarkVariant() {
  const[countup,Setcountup]=useState(false)
  const styleimageslide={
    height: '95vh'
  }
  const styleimageslide2={
    height: '30vh', 
    width: 'auto'
  }

  return (
    <>
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100 " style={styleimageslide}
          src='./images/image1.jpg'
          alt="First slide"

        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"style={styleimageslide}
          src='./images/image2.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={styleimageslide}
          src='./images/image3.jpg'
          alt="Third slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={styleimageslide}
          src='./images/image4.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  <div className={style.body_for}>
  
       <p style={{fontSize:'2rem'}}>L'hôpital MELKAT incarne un pilier essentiel dans le domaine de la santé, offrant des soins de premier plan et des services de qualité. En tant que référence incontournable dans le secteur de la santé privée, MELKAT se distingue par sa capacité à répondre aux besoins médicaux les plus exigeants. Fort de son engagement envers l'excellence, l'hôpital MELKAT représente un établissement moderne et dévoué, contribuant de manière
        significative au bien-être de ses patients et à l'innovation dans le domaine de la santé</p>
    
  </div>
  <ScrollTrigger onEnter={()=>Setcountup(true)} onExit={()=>Setcountup(false)}>
   <div className={style.container}>
     <div className={style.body_for2}>
      <FontAwesomeIcon icon={faBed} style={{height: '70PX' , color: '#334389'}} />  
         {countup && <h1><CountUp start={0} end={100} duration={2} delay={0.5} /></h1>}
         <p>Lits</p>
      </div>
      <div className={style.body_for2}>
      <FontAwesomeIcon icon={faUserDoctor} style={{height: '70PX' , color: '#334389'}} />
        {countup && <h1><CountUp start={0} end={47} duration={2} delay={0.5} /></h1>}
        <p>Médecins</p>
      </div>
      <div className={style.body_for2} >
      <FontAwesomeIcon icon={faUserNurse} style={{height: '70PX' , color: '#334389'}} />
        {countup && <h1><CountUp start={0} end={68} duration={2} delay={0.5} /></h1>}
        <p>Infirmières</p>
      </div> 
    </div>
    </ScrollTrigger>
  
    <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '80vh', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="./images/img1.png" style={styleimageslide2} alt="Image 1" />
          <p style={{fontSize:'25px',color:'#324286'}}>MEILLEURS MÉDECINS</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="./images/img2.png" style={styleimageslide2} alt="Image 2" />
          <p style={{fontSize:'25px',color:'#324286'}}> MEILLEUR TRAITEMENT</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="./images/img3.png" style={styleimageslide2} alt="Image 3" />
          <p style={{fontSize:'25px',color:'#324286'}}>VOTRE SANTÉ EST NOTRE PRIORITÉ</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="./images/img4.png" style={styleimageslide2} alt="Image 4" />
          <p style={{fontSize:'25px',color:'#324286'}}>EXCELLENTS SOINS</p>
        </div>
      </div>
      <div className={style.body_for4}>
  
       <p style={{fontSize:'2rem', fontFamily:'Arial, Helvetica, sans-serif' ,width:'70%'}}> <span style={{fontStyle: 'italic',fontFamily: 'cursive',fontSize:'40px'}}>Qui sommes-nous</span> ?<br/> <br/>Leader du secteur privé de la santé au Maroc, l'Hôpital MELKAT fait de 
       l'accessibilité aux soins une priorité majeure dans sa mission au sein du pays. En tant qu'établissement 
       de santé unique, MELKAT s'engage à maintenir les normes les plus élevées de sécurité et de qualité pour
      ses patients. <br/><br/> Situé dans une ville importante du Royaume, l'Hôpital MELKAT envisage une expansion dans les
       années à venir, avec l'objectif de fournir des services de santé exceptionnels à une communauté élargie.
       <br/><br/>  La vision centrale de l'Hôpital MELKAT est de fournir non seulement des soins médicaux de premier plan à           ses patients, mais aussi de créer un environnement propice et épanouissant pour son personnel dévoué et ses
       professionnels de la santé. Avec un engagement envers l'excellence, l'Hôpital MELKAT aspire à répondre aux 
       besoins de santé de la communauté avec une dévotion inébranlable et des soins de qualité.</p>
  </div>
  
      <main>
        <div>
            <div>
              <img src='./images/pic1.jpg' loading='lazy'/>
              <img src='./images/pic2.jpg' loading='lazy'/> 
              <img src='./images/pic3.jpg' loading='lazy'/> 
            </div>
        </div>
      </main> 
      <Footer/>
       
    </>
  );
}

export default DarkVariant;