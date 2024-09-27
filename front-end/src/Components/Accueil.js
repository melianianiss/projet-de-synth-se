import { useEffect } from "react";
import  DarkVariant from "./ImageSlider";


const Acceuil = () => {
  useEffect(()=>{
    document.title='App hospital-Accueil'
  },[])
  return (
    <div>
  
      < DarkVariant />
      
    </div>
  );
};

export {Acceuil};