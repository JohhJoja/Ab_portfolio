import React from 'react'
import { Link } from 'react-router-dom'
interface props {
    id: number
}
const ImgItem: React.FC<props> = (props) => {
    const onMOver = () => {
        const img: HTMLElement | null = document.querySelector('.imgg')
        if (img) img.style.display = 'none'
    }
    const onMOut = () => {
        const img: HTMLElement | null = document.querySelector('.imgg')
        if (img) img.style.display = 'block'
    }
    return (
        <div>
            <Link
                className="targettt"
                to={`/tv/proj${props.id}`}
                onMouseOver={onMOver}
                onMouseOut={onMOut}
            ></Link>
            <img className="imgg" src={require(`../img/tv/prev/bg${props.id}.jpg`)} alt="" />
            <video className="imgg1" src={require(`../img/tv/video/vid${props.id}.mp4`)} autoPlay loop muted />
        </div>
    )
}

export default ImgItem