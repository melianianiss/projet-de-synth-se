import { useEffect } from "react"
import style from "./login.module.css"
import Footer from "./Footer"
import { Link } from "react-router-dom"
export const Login=()=>{
  useEffect(()=>{
    document.title='App hospital-Login'
  },[])
  return(
    <>
    <div style={{display:'flex',justifyContent:"center",alignItems:'center',padding:'350px'}}>
    <div className={style.card}>
      <div className={style.profileImage}>
        <center>
          <img
            height="180px"
            src="https://img.icons8.com/plasticine/100/manager.png"
            alt="manager"
          />
        </center>
      </div>
      <div className={style.textContainer}>
       <div className={style.name}>MODERATEUR</div>
      </div>
     <Link to={'/moderateur/login'}> <div className="btn btn-primary" style={{width:'40%',padding:'6px',margin:'0px 65px'}}>login</div></Link>
    </div>
  
    <div className={style.card}>
      <div className={style.profileImage}>
        <center>
          <img
            height="200px"
            src="https://img.icons8.com/color/48/doctor-male-skin-type-3.png"
            alt="administrator-male"
          />
        </center>
      </div>
      <div className={style.textContainer}>
        <div className={style.name}>DOCTEUR</div>
        <div className="btn btn-primary" style={{width:'50%',padding:'6px',margin:'18px 55px'}}>login</div>
      </div>
    </div>
  
    <div className={style.card}>
      <div className={style.profileImage}>
        <center>
          <img
            height="160px"
            src="https://img.icons8.com/color/48/clerk.png"
            alt="training"
          />
        </center>
      </div>
      <div className={style.textContainer}>
        <div className={style.name}>RÉCEPTIONNISTE</div>
        <div className="btn btn-primary" style={{width:'50%',padding:'6px',margin:'18px 55px'}}>login</div>
      </div>
    </div>
    </div>
    
    <Footer/>
    </>
  )
}