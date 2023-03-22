import React from 'react'
import { useNavigate } from 'react-router-dom';

interface props {
    class: string
    id: string
    img: string
    vinID: string
}

const Folder: React.FC<props> = (props) => {
    const navigate = useNavigate()
    const handle = (e: React.MouseEvent<HTMLElement>) => {
        const folder: HTMLElement | null = document.querySelector('.folder');
        const v1: HTMLElement | null = document.querySelector('.v1');
        const v2: HTMLElement | null = document.querySelector('.v2');
        const v3: HTMLElement | null = document.querySelector('.v3');
        const transl: HTMLElement | null = document.querySelector('.transl2');
        const obj = e.currentTarget;
        const id: string = e.currentTarget.id;

        let rotate: string = `transform: rotateZ(1080deg) ;`

        folder!.style.marginTop = "120px";
        transl!.style.opacity = '1';
        transl!.style.top = '0';

        if (id.includes('1')) {
            obj.style.cssText = `
                transition-duration: 0.9s;
                transform: translateY(-1310px) translateX(33px)scale(1.3);
                z-index: 11`
            v1!.style.cssText = rotate;
        } else if (id.includes('2')) {
            obj.style.cssText = `
                transition-duration: 0.9s;
                transform: translateY(-680px) translateX(19px) scale(1.3);
                z-index: 11`
            v2!.style.cssText = rotate
        } else if (id.includes('3')) {
            obj.style.cssText = `
                transition-duration: 0.9s;
                transform: translateY(-1010px) translateX(33px)scale(1.3);
                z-index: 11`
            v3!.style.cssText = rotate
        }
        setTimeout(() => {
            navigate(`/tv/${id}`)
        }, 1700)
    }
    return (
        <div className={props.class} id={props.id} onClick={handle}>
            <img className="img" src={require(`../img/folders/${props.img}.png`)} alt="" />
            <img className={'v' + props.vinID} src={require("../img/folders/vinyl.png")} alt="" />
        </div>
    )
}

export default Folder