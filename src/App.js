import "./styles/index.scss";
import 'material-icons/iconfont/material-icons.css';
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PicAText from "./components/PicAText";
import PicATextR from "./components/PicATextR";
import Modal from "./components/Modal";


const App = () => {

  const [SBar, setSBar] = useState(false)
  const [Image, setImage] = useState(false)

  const displayBarON = () => {
    setSBar(!SBar)
    console.log(SBar)
  }


  return (
    <div className="everything" >
      {SBar ? <Sidebar SBar={SBar} setSBar={setSBar}/> : <></>}
      {Image ? <Modal Image={Image} setImage={setImage}/> : <></>}
      <div className="top">
        <div className="top-header dRow">
          <div className="top-header-leftside dRow">
          <span onClick={displayBarON} class="material-icons-outlined white size">format_list_bulleted</span>
            <div className="top-header-leftside-title white">Gala-SCSS</div>
          </div>
          <div className="top-header-rightside dRow">
            <div className="top-header-rightside-Menu_title white">Abstract</div>
            <div className="top-header-rightside-Menu_title white">Logos</div>
            <div className="top-header-rightside-Menu_title white">Gaming</div>
          </div>
        </div>
        <div className="top-middle_text">
          <div className="top-middle_text-Big_text white">I Do Graphic Design</div>
          <div className="top-middle_text-small_text white">Brad Traversy</div>
        </div>
      </div>

      <div className="middle">
        <PicAText setImage={setImage} Image={Image} />
        <PicATextR setImage={setImage} Image={Image} />
        <PicAText setImage={setImage} Image={Image} />
      </div>

      <div className="footer">
        <div className="footer-blackPart">
          <div className="footer-blackPart-leftPart">
            <div className="footer-blackPart-leftPart-aboutMe white">About Me</div>
            <div className="footer-blackPart-leftPart-belowPart white">You can use rows and columns here to organize your footer content.</div>
          </div>
          <div className="footer-blackPart-rightPart">
            <div className="footer-blackPart-rightPart-links white">Links</div>
            <div className="footer-blackPart-rightPart-fodder">
              <div className="footer-blackPart-rightPart-fodder-text white">Abstract</div>
              <div className="footer-blackPart-rightPart-fodder-text white">Logos</div>
              <div className="footer-blackPart-rightPart-fodder-text white">Gaming</div>
            </div>
          </div>
        </div>
        <div className="footer-grayPart">
          <div className="footer-grayPart-date white">C2018 Galappear</div>
          <div className="footer-grayPart-date white">More Links</div>
        </div>
      </div>
    </div>
  );
};

export default App;
