import React from "react";
import '../styles/index.scss'
import Pororo from '../assets/Pororo.jpg'

const Modal = ({Image, setImage}) => {    

    const displayImageOFF = () => {
        setImage(false)
      }

    return (
        <div className="everythingElse" onClick={displayImageOFF}>
             <img className="everythingElse-image-modal" src={Pororo}></img>
        </div>
    )
}

export default Modal;