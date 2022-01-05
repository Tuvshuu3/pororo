import React from "react";
import Pororo from '../assets/Pororo.jpg'
import '../styles/index.scss'

const PicAText = ({Image, setImage}) => {

    const displayImageON = () => {
        setImage(!Image)
        console.log(Image)
      }

    return (
        <div className="FULL">
            <div className="sectionR">
            <div className="sectionR-textR">
                <div className="sectionR-textR-TitleR white">Pororo</div>
                <div className="sectionR-textR-descriptionR white">Huuh pororo baina. Sainuu Pororo. Sainuu naizuudaa, sainuu naizuudaa. sahilgagu pororoo. poron poron porororoo. urgelj hugjiltei sahilgagu jaal bidnii otson shuvuu pororooo</div>
            </div>
            <div onClick={displayImageON} className="image-div">
                <img src={Pororo} className="sectionR-imageR"></img>
            </div>
        </div>
        </div>
        
    )
}

export default PicAText