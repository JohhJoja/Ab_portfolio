import React from 'react'
import './styles/plue.css'

const Plue: React.FC = () => {
    let git: HTMLElement | null;
    let mail: HTMLElement | null;
    const onOver = (e: React.MouseEvent<HTMLElement>) => {
        git = document.querySelector('#ch2')
        mail = document.querySelector('#ch3')
        git!.style.top = '60px'
        mail!.style.top = '120px'
    }
    const onOut = (e: React.MouseEvent<HTMLElement>) => {
        git!.style.top = '0'
        mail!.style.top = '0'
    }
    return (
        <div
            className="p3_links"
            onMouseOver={onOver}
            onMouseOut={onOut}
        >
            <div className="plue_links_item" id='ch1'><div><a href="https://t.me/JohhJoja"></a></div></div>
            <div className="plue_links_item" id='ch2'><div><a href="https://github.com/JohhJoja"></a></div></div>
            <div className="plue_links_item" id='ch3'><div><a href="mailto:dmitriy.yeliseeev@gmail.com"></a></div></div>
        </div>
    )
}

export default Plue