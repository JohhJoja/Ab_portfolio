import React from 'react';
import './styles/tv.css';
import Folder from '../components/Folder';

const TV: React.FC = () => {
    return (
        <>
            <div className="transl2">
                <img className="img" src={require('../img/noice/transl.gif')} alt="" />
            </div>

            <div className="folder_wrapp">
                <div className="transl">
                    <img className="img" src={require('../img/noice/transl.gif')} alt="" />
                </div>

                <div className="folder">
                    <div className="m_f">
                        <img className="img" src={require("../img/folders/m_f5.png")} alt="" />
                    </div>
                    <div className="s_f">
                        <img className="img" src={require("../img/folders/s_f.png")} alt="" />
                    </div>
                    <Folder class='projects' id='page2' img='projects' vinID='2' />
                    <Folder class='skills' id='page3' img='skills' vinID='3' />
                    <Folder class='info_ab' id='page1' img='info1' vinID='1' />
                </div>
            </div>
        </>
    )
}

export default TV