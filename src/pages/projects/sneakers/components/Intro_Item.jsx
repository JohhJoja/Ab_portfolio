import React from 'react';
import { Link } from 'react-router-dom';
import './intro_item.css'

function Intro_Item(props) {
    return (
        <div className="intro_info_item">
            <div className="intro_info_items">
                <div className="intro_info_items_img">
                    <Link to={`/tv/proj2/shop/${props.id}`}>
                        <img src={require(`../img/snikers/${props.imgSrc}`)} className="intro_info_items_img_img" />
                    </Link>
                </div>
            </div>
            <div className="intro_info_items_text"><a href="">{props.snikName}</a></div>
        </div>
    )
}

export default Intro_Item